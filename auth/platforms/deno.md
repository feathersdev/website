# Deno

A [Deno](https://deno.com/) server handling requests with Cloud Auth looks like this.

## Verifier

An `authenticateRequest` function that validates an incoming web standard request can be implemented in `src/authenticate.ts` like this:

<<< @/../examples/server/deno/src/authenticate.ts

## Server

A Deno server can then use it in `src/server.ts` like this:

<<< @/../examples/server/deno/src/server.ts

The full Deno example can be found [here](https://github.com/feathersdev/examples/tree/main/server/deno).
