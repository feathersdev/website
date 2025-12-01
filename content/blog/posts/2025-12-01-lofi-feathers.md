---
date: 2025-12-01
title: 'A first look at local-first Feathers'
slug: 2025-12-01-lofi-feathers
tagline: 'Collaborative offline-capable real-time apps without a backend'
author: David Luecke
category: Feathers
imgSrc: https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/bdb1ad17-8dca-4d58-ce82-2609d9de3000/public
imgContainerClasses: 'h-64 sm:h-96 md:h-120'
tags:
  - feathers
  - local-first
  - automerge
---

One of the things I always liked about the architecture of FeathersJS is that it is transport agnostic. Back in 2018, I first showed a demo of a peer-to-peer version of the Feathers chat using the experimental and now defunct Beaker browser at the Vancouver JavaScript meetup. I really enjoyed the workflow of creating a real-time application that essentially ran as a static website with no backend at all.

A year later, Ink & Switch [coined the term local-first](https://www.inkandswitch.com/essay/local-first/) for this emerging kind of software. Collaborative software that is fast and where users have more control over their data. The local-first approach can also address one of the things that has been notoriously difficult in server-centric applications: Offline support.

This year, I have been working with the long-time collaborators at [Kalisio](https://kalisio.com/) on adding local-first and offline synchronization capabilities to Feathers. Kalisio [creates open source mapping software](https://kalisio.com/solutions/) and uses it with clients like Airbus and the French institute for nuclear safety (Institut de Radioprotection et de Sûreté Nucléaire or IRSN). This made for some interesting use cases:

- Airbus planes run their own application servers on test flights that collect data which then need to be synchronized with the main system when the plane lands
- IRSN workers are out in the field maintaining radiation sensors and may not always have a connection when using the mapping application

![IRSN mapping tool and response workers](https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/54bd5b75-a9ab-4f79-6fad-97a996fd2f00/public)

## CRDTs and Automerge

After some initial research around available local-first tools, we decided to use [Automerge](https://automerge.org) as the base for this project:

> Automerge is a local-first sync engine for multiplayer apps that works offline, prevents conflicts, and runs fast.

At the heart of Automerge is a [Conflict-Free Replicated Data Type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDT) which is a data structure that is replicated across everybody's device and can synchronize any changes usually without conflicts. This also works when offline and any changes will be synchronized when reconnecting. It was a good choice for this project because it is fully open source, performant, and robust.

A sync server is used to keep an always-available copy of all documents and to provide a websocket connection to web browsers (which still do not support reliable peer-to-peer communication). While this means that there is still a server that needs to run somewhere, it is the same code that runs on every client, making it a fairly basic piece of software that can be hosted anywhere from a Raspberry Pi at home to a traditional cloud deployment.

## Feathers and Automerge

In the [kalisio/offline-sync](https://github.com/kalisio/offline-sync) project we implemented the following functionality:

- A Feathers AutomergeService that supports the [database query syntax](https://feathersjs.com/api/databases/querying.html) and real-time events but uses an Automerge document as the data store.
- An Automerge sync server that supports Feathers authentication
- A server side plugin that keeps an AutomergeService document in sync with an existing server side Feathers service
- The ability to create "Offline Views" on the sync server. This initializes an AutomergeService document with a subset (or all) existing data from the server and keeps it in sync with any changes made on the server or by a client.

I got a first chance at presenting that work at the [Halloween Automerge Community call](https://www.youtube.com/watch?v=nwOwQzEDuK8) where I showed the AutomergeService and how it can be used to create a Feathers real-time application without a backend. I used Svelte as the framework and showed a simple application where anybody can send real-time messages if they know the URL or Automerge document id.

The entire application fits into a single Svelte component and uses the public Automerge development sync server. You can try it by creating a new Svelte application with:

```bash
npm create vite@latest -- -t svelte-ts feathers-lofi
```

Install the Automerge packages, the Feathers 6 prerelease and the Vite Wasm plugin with:

```bash
cd feathers-lofi
npm install feathers@pre @automerge/automerge-repo @automerge/automerge-repo-network-websocket @automerge/automerge-repo-storage-indexeddb @kalisio/feathers-automerge --save
npm install vite-plugin-wasm --save-dev
```

Then update `src/App.svelte` with this:

```svelte
<script lang="ts">
  import { feathers } from 'feathers'
  import { Repo, type AnyDocumentId } from '@automerge/automerge-repo'
  import { BrowserWebSocketClientAdapter } from '@automerge/automerge-repo-network-websocket'
  import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb'
  import type { SyncServiceDocument } from '@kalisio/feathers-automerge'
  import { AutomergeService } from '@kalisio/feathers-automerge'

  type Message = {
    id: string
    text: string
    createdAt: number
  }

  // Initialize Automerge Repo and point to public testing sync server
  const repo = new Repo({
    network: [new BrowserWebSocketClientAdapter('wss://sync.automerge.org')],
    storage: new IndexedDBStorageAdapter(),
  })

  // Load the Automerge document from the URL hash or create a new one and set the hash
  async function getDocument() {
    const hash = window.location.hash

    if (hash) {
      const url = hash.substring(1)
      return repo.find<SyncServiceDocument>(url as AnyDocumentId)
    }

    const doc = repo.create<SyncServiceDocument>({
      __meta: {},
      data: {},
    })

    window.location.hash = doc.url

    return doc
  }

  // Initialize Feathers 6 application
  const app = feathers<{
    messages: AutomergeService<Message, Omit<Message, 'id'>>
  }>()

  // Register the Automerge service
  app.use('messages', new AutomergeService(await getDocument()))

  let text = $state('')
  let messages = $state(await app.service('messages').find())

  // Render new messages on real-time events
  app.service('messages').on('created', (message: Message) => {
    messages.push(message)
  })

  // Set up the application
  await app.setup()

  function createMessage(event: Event) {
    event.preventDefault()
    app.service('messages').create({
      text,
      createdAt: Date.now(),
    })
    text = ''
  }
</script>

<main>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.1/dist/full.css" rel="stylesheet" type="text/css" />
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://dove.feathersjs.com/feathers-chat.css" />
  <div class="drawer drawer-mobile">
    <input id="drawer-left" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div id="chat" class="h-full overflow-y-auto px-3">
        {#each messages as message (message.id)}
          <div class={`chat py-2 chat-start`}>
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="https://github.com/feathersdev.png" />
              </div>
            </div>
            <div class="chat-header pb-1">
              <time class="text-xs opacity-50">{new Date(message.createdAt).toLocaleString()}</time>
            </div>
            <div class="chat-bubble">
              {message.text}
            </div>
          </div>
        {/each}
        <div id="message-end" />
      </div>
      <div class="form-control w-full py-2 px-3">
        <form class="input-group overflow-hidden" id="send-message" on:submit={createMessage}>
          <input
            name="text"
            type="text"
            placeholder="Compose message"
            class="input input-bordered w-full"
            bind:value={text}
          />
          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </div>
  </div>
</main>
```

We also need to update `vite.config.ts` to support WebAssembly and top-level `await` for initialization to be a bit easier:

```ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import wasm from 'vite-plugin-wasm'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
    svelte({
      compilerOptions: {
        experimental: {
          async: true,
        },
      },
    }),
  ],
})
```

With the development server runnning, visit the page at [localhost:5173](http://localhost:5173/). You can copy the URL into another browser to see messages being sent in real-time. The page will also continue to work offline.

The Automerge service is just one of the pieces of the project. A full example with offline views and server sync can be found in the [offline-sync](https://github.com/feathersdev/offline-sync) repository.

## Halloween shenanigans

It was Halloween season and I opened up with the last video message of a nuclear safety engineer being pursued by a nameless horror. It was fun to put together, fiddle with video effects and editing and do sound design for it. Who knows, maybe with better offline tools we would've found the record earlier?

::bluesky-embed{uri="at://did:plc:vspq46f5zmrlesaszlyfliy2/app.bsky.feed.post/3m3sgyrc4js2u" cid="bafyreigtc4drexfqj7z4yvsid57gnq4hhyry77zxx6gu24mxzdzdexl5mi"}
::

## What we are working on

We are really interested in the local-first software approach because it makes developing small apps and adding simple features or offline functionality to existing applications much easier than in current "full stack" development.

However, most current authentication solutions rely on a central server and are not particularly local-first or offline friendly. Throughout this year we have also been working on refining and improving our authentication solution that makes local-first a priority and can also be quickly embedded in a traditional application. We are looking for beta testers for early in 2026. Subscribe to our newsletter below to stay in the loop!

---

*This blog post was painstakingly written by a human in the hopes of getting better at this kind of thing.*
