# Cloudflare Workers

Cloud Auth is fully compatible with [Cloudflare Workers](https://workers.cloudflare.com/) and can verify requests like this.

```bash
npm create feathersdev@latest server --platform cloudflare --app-id "<your-app-id>"
```

## Verifier

An `authenticateRequest` function that validates an incoming web standard request can be implemented in `src/authenticate.ts` like this:

::CodePreview
---
path: server/cloudflare/src/authenticate.ts
---
::

## Worker

It can then be used in a Cloudflare worker like this:

::CodePreview
---
path: server/cloudflare/src/index.ts
---
::

The full Cloudflare Worker example can be found [here](https://github.com/feathersdev/examples/tree/main/server/cloudflare).
