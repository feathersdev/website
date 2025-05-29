---
title: TypeScript
---

# TypeScript

```sh
npm create feathersdev@latest app --framework vanilla --app-id "<your-app-id>"
```

## Initialization

In any web application, create an `auth.ts` file that allows to make authenticated requests to the backend like this:

::CodePreview
---
path: frontend/auth.ts
---
::

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