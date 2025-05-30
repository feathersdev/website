# Automerge

[Automerge](https://automerge.org) is a conflict-free replicated data type (CRDT) that is used to synchronize data between devices. Each feathers.dev application has an Automerge document that can be used to store data that is synchronized in real-time between users. The `@feathersdev/automerge` package contains the Automerge integration for feathers.dev applications.

## Usage

```ts
import { createAutomerge, DocHandle } from '@feathersdev/automerge'
import { auth } from './auth.js'

/**
 * The Feathers Automerge client. Use it to retrieve the document
 * for your application with `automerge.find()`.
 */
export const automerge = createAutomerge(auth)

/**
 * Add types for any data you want to store for your application
 */
export interface AppData {
  counter: number
}

/**
 * The document handle type for the application
 */
export type AppDocumentHandle = DocHandle<AppData>

/**
 * Load the document for the application
 */
export async function loadAppDocument(): Promise<AppDocumentHandle> {
  return automerge.find<AppData>()
}
```

## Package managers

Automerge is a Webassembly module and the package manager needs to be configured to handle it. Here is an example for Vite:

```ts
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [wasm()],
})
```
