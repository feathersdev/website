# Auth Client

The Feathers Cloud Auth client in the `@featherscloud/auth` package is used to manage device and user identities as well as access tokens.

## Installation

It can be installed with

```sh
npm i @featherscloud/auth
pnpm add @featherscloud/auth
yarn add @featherscloud/auth
bun add @featherscloud/auth
```

## Initialization

In any web application, create an `auth.ts` file that allows to make authenticated requests to the backend like this:

<<< @/examples/frontend/auth.ts

This file exports an `authFetch` function that can be used just like the normal [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and will redirect to the login page if the user needs to log in.

## Usage

Authenticated requests to a server running one of the [supported platforms](../platforms/index.md) can be made like this:

```ts
import { authFetch } from './auth.js'

async function getMessage() {
  // Get data with authentication from your server
  const response = await authFetch('http://localhost:3030/message', {
    method: 'GET'
  })

  if (response.status >= 400) {
    throw new Error(`Failed to load message: ${response.statusText}`)
  }

  const body = await response.json()

  return body
}
```

## Frameworks

For complete examples for different frontend frameworks see the following pages:

- [React](./react.md)
- [VueJS](./vue.md)
- [Svelte](./svelte.md)
