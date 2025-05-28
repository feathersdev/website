# Platforms

Once [the Cloud Auth client](../client/index.md) is integrated into your web application, requests can be authenticated on any modern web runtime with the verifier.

## Installation

When using a package manager, the `@featherscloud/auth` package is installed like this:

```sh
npm i @featherscloud/auth
pnpm add @featherscloud/auth
yarn add @featherscloud/auth
bun add @featherscloud/auth
```

## Initialization

A verifier that can verify headers and access tokens is initialized like this:

```ts
import { createVerifier } from '@featherscloud/auth'

const appId = '<your-app-id>'
const verifier = createVerifier({ appId })
```

## Usage

For complete server examples of each supported platform that works with the [framework client examples](../client/index.md) see:

- [Node](./nodejs.md) and Express
- [Cloudflare Workers](./cloudflare.md)
- [Deno](./deno.md)
- [Bun](./bun.md)
