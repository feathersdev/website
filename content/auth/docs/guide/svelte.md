---
title: Svelte
---

# Svelte

```sh
npm create feathersdev@latest app --framework svelte --app-id "<your-app-id>"
```

## Initialization

In your Svelte application, create a `src/auth.ts` file that allows to make authenticated requests to the backend like this:

<<< @/examples/frontend/svelte/src/auth.ts

This file exports an `authFetch` function that can be used just like the normal [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and will redirect to the login page if the user needs to log in.

## Usage

A Svelte component using the Auth client and loading the message from one of the [platform example servers](../platforms/index.md) looks like this:

<<< @/examples/frontend/svelte/src/App.svelte

You can find the full Vite + Svelte example application [here](https://github.com/feathersdev/examples/tree/main/client/svelte).
