---
outline: deep
---

# NodeJS

Feathers Auth requests can be verified in [NodeJS](https://nodejs.org/) with or without a framework.

## HTTP

A NodeJS server using the `node:http` module without any framework can be implemented as follows.

```sh
npm create feathersdev@latest server --platform nodejs --app-id "<your-app-id>"
```

Create an `src/authenticate.ts` file that validates an incoming request like this:

::CodePreview
---
path: server/nodejs/src/authenticate.ts
---
::

Then implement an HTTP handler with basic CORS [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (necessary to allow requests from any [client framework](../client/index.md)) in `src/app.ts` like this:

::CodePreview
---
path: server/nodejs/src/server.ts
---
::

The full NodeJS example server can be found [here](https://github.com/feathersdev/examples/tree/main/server/nodejs).

## Express

```sh
npm create feathersdev@latest server --platform express --app-id "<your-app-id>"
```

For Express we can add our own `authenticate` middleware to authenticate incoming requests in `src/authenticate.ts`:

::CodePreview
---
path: server/express/src/authenticate.ts
---
::

And then implement an Express application in `src/app.ts` like this:

::CodePreview
---
path: server/express/src/app.ts
---
::

The full Express example server can be found [here](https://github.com/feathersdev/examples/tree/main/server/express).
