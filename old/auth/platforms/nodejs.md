---
outline: deep
---

# NodeJS

Feathers Auth requests can be verified in [NodeJS](https://nodejs.org/) with any framework.

## HTTP

A NodeJS server using the `node:http` module without any framework can be implemented as follows.

Create an `src/authenticate.ts` file that validates an incoming request like this:

<<< @/examples/server/nodejs/src/authenticate.ts{js}

Then implement an HTTP handler with basic CORS [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (necessary to allow requests from any [client framework](../client/index.md)) in `src/app.ts` like this:

<<< @/examples/server/nodejs/src/server.ts{js}

The full NodeJS example server can be found [here](https://github.com/feathersdev/examples/tree/main/server/nodejs).

## Express

For Express we can add our own `authenticate` middleware to authenticate incoming requests in `src/authenticate.ts`:

<<< @/examples/server/express/src/authenticate.ts{js}

And then implement an Express application in `src/app.ts` like this:

<<< @/examples/server/express/src/app.ts{js}

The full Express example server can be found [here](https://github.com/feathersdev/examples/tree/main/server/express).
