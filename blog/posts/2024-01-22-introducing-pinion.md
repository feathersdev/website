---
date: 2024-01-22
title: 'Pinion - A modern code generator toolkit'
tagline: 'A flexible task runner and code generator for any language'
author: David Luecke
category: Open Source
imgSrc: /img/moonbase.svg
imgContainerClasses: 'h-64 sm:h-96 md:h-120'
tags:
  - pinion
  - generators
---

Basically every software project has repetitive tasks and code that needs to be created over and over. Be it a new component, a controller, middleware or a service. This is where a code generation framework comes in. Generators can codify best practises and help developers get started quickly with common tasks.

Today we want to share our latest creation. We call it Pinion. Pinion is a modern generator toolkit and has become our favorite code generator and CLI library. Keep reading to find out why it might become yours, too.

## Why we built Pinion

Outside of internal projects, many open source projects also offer CLI tooling to get a project started. When we started working on the new [Feathers CLI](https://feathersjs.com) we were looking for a modern generator framework that works for both internal and open source projects.

After maintaining CLI generators for more than a decade we had a list of things we considered to be important:

- **Typesafe** - Untyped templating languages like Mustache or EJS are difficult to read, debug and don't have good editor support. Type safety helps during development and to avoid runtime errors so both, generators and templates should be typesafe.
- **Functional** - A generator should just be a function that performs its steps and returns with the information from those steps. This approach keeps everything robust yet flexible. Kind of like React, but for generating code.
- **Scalable** - Generator logic and templates should be kept together but be flexible enough to modularize as the project grows.
- **Flexible** - We wanted a small, functional API that is not in the way and as close to plain TypeScript as possible.
- **Composable** - Calling another generator should just be like calling another function. This makes them testable, composable and reusable. Testability is especially important to ensure generators are kept up to date.
- **Fast** - Generators should be compileable to run with no additional overhead to ship them e.g. as an npm package or a CLI tool.

We tried many of the existing tools but none of them covered all of the requirements, especially when it came to type safety. This is when we started experimenting with [TypeScript template strings](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) and putting the generator steps together as [Promise chains](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining). It worked so well that we decided to release it as its own library.

## How it works

Pinion is a [NodeJS](https://nodejs.org/en) library and installed as a development dependency within your project so that it is always available for every developer:

```sh
npm install @featherscloud/pinion --save-dev
```

<BlockQuote type="tip" label="Note">

While generators are written in TypeScript your project can use any programming language. For projects without a `package.json` run `npm init --yes` first.

</BlockQuote>

Generators can live anywhere in your project. For example, we can create a generator in `generators/readme.tpl.ts` that asks for your name and then writes it to a markdown readme file like this:

```ts
import {
  PinionContext,
  prompt,
  renderTemplate,
  toFile
} from '@featherscloud/pinion'

interface Context extends PinionContext {
  name: string
}

// The file content as a template string
function readme({ name }: Context) {
  return `# Hello ${name}

Welcome to Pinion!

Copyright (c) ${new Date().getFullYear()}
`
}

// Export the generator and render the template
export function generate(init: Context) {
  return Promise.resolve(init)
    .then(
      prompt({
        name: {
          type: 'input',
          message: 'What is your name?'
        }
      })
    )
    .then(renderTemplate(readme, toFile('readme.md')))
}
```

It can be run with:

```sh
npx pinion generators/readme.tpl.ts
```

Which will look similar to this:

![Running Pinion](/img/npx-pinion.png)

And generated a `readme.md` in the current folder like this:

```md
# Hello David

Welcome to Pinion!

Copyright (c) 2024
```

## Working with Pinion

Pinion is so lightweight that we refer to it not as a "generator framework" but as a toolkit. Despite its size, it has proven very effective due to its carefully selected API. Pinion is already being used in the Feathers CLI and several large production projects. Here are some of the things we found ourselves and heard from other developers about working with Pinion:

- No more difficult-to-debug templates. We now set breakpoints directly in templates and inspect variables live, always see all variables available in a template and develop with the TypeScript tooling of our code editor.
- We love using our favorite TypeScript features everywhere. Pinion lets us use our favorite tools and packages without limitations.
- It's easy to test generators. We can test them just like any other function. It's just template strings, but it doesn't stop us from using another template language if we want to.
- We've especially appreciated this: we've been able to make independent generators for different parts of our projects, then layer them together to create a single generator. This has made our generators more reusable and easier to maintain.
- The learning curve is essentially non-existent. If you know TypeScript, you know Pinion. If you know JavaScript, you can learn Pinion in a few minutes, since our dependency on TypeScript is lightweight.

It's always rewarding to see an idea come together as something that is useful and fun to use at the same time. As we built it, we kept asking ourselves, "why hasn't anybody else done this?" We couldn't find anything like it, and we're happy to share it with you. If you like what you see, head over to the [Pinion guide](/pinion/) to get started with your own generators.
