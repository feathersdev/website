# Vue

## Initialization

In your VueJS application, create a `src/auth.ts` file that allows to make authenticated requests to the backend like this:

<<< @/examples/frontend/react/src/auth.ts

This file exports an `authFetch` function that can be used just like the normal [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and will redirect to the login page if the user needs to log in.

## Usage

A VueJS component using this function to load the message from one of the [platform example servers](../platforms/index.md) looks like this:

<<< @/examples/frontend/vue/src/App.vue

You can find the full Vite + Vue example application [here](https://github.com/feathersdev/examples/tree/main/client/vue).
