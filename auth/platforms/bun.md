# Bun

The [Bun JavaScript runtime](https://bun.sh/) can run a web standard HTTP server with Cloud Auth like this.

## Verifier

An `authenticateRequest` function that validates an incoming web standard request can be implemented in `src/authenticate.ts` like this:

<<< @/examples/server/bun/src/authenticate.ts

## Server

Then the BunJS server can then use it in a `src/index.ts` like this:

<<< @/examples/server/bun/src/index.ts

The full Bun example server can be found [here](https://github.com/feathersdev/examples/tree/main/server/bun).
