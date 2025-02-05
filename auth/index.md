---
outline: deep
---

# Feathers Cloud Auth

Feathers Cloud Auth adds secure and scalable user authentication to any JavaScript and TypeScript web application. It works with any frontend framework and with NodeJS, Cloudflare Workers, Deno or Bun and even on websites with no server at all.

## How it works

While Feathers Cloud Auth looks similar to traditional identity providers by letting users log in through a login page, it works a little different under the hood. Instead of oAuth flows and shared secrets, it uses cryptographic keys that are securely stored on each device and links them to a user identity.

The only thing needed to verify a user identity is the public application identifier. It is self contained and requires no backend, secrets or additional server requests. It even works offline.

## Quick start

The fastest way to get up and running with Cloud Auth is by using our CLI tool with one of these commands.

### Example

To create a fully working example application with a React, Vue or Svelte frontend and any of the supported backend platforms run:

```sh
npx @featherscloud/cli example
```

### Integration

To integrate Cloud auth into an existing application run

```sh
npx @featherscloud/cli integrate
```

### Without the CLI

If you don't like using the CLI tool, you can also sign up at [app.feathers.cloud](https://app.feathers.cloud), create an organization and application and then use the code examples in this documentation.

## What's next?

Feathers Cloud Auth comes in two parts:

1. The client that is integrated into your web application and is used to manage user identities, login page redirects and getting a valid access token to make requests to the backend. General integration details for any framework can be found on the [client page](./client/index.md) and there are also examples how this integration can be used with
    - [React](./client/react.md)
    - [VueJS](./client/vue.md)
    - [Svelte](./client/svelte.md)
2. The backend platform integration that verifies the access token in requests from the web application. General information can be found in the [platforms page](./platforms/index.md) and a complete example for each platform at
    - [NodeJS](./platforms/nodejs.md)
    - [Deno](./platforms/deno.md)
    - [Bun](./platforms/bun.md)
    - [Cloudflare Workers](./platforms/cloudflare.md)

Also have a look at the [pricing page](./pricing.md) and [API documentation](./api.md).
