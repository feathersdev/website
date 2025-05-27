---
outline: deep
---

# API

## createClient

`createClient(options)` creates a new [CloudAuthClient](#cloudauthclient) for the application with `appId`.

```ts
import { createClient } from '@featherscloud/auth'

const appId = '<your-app-id>'
const auth = createClient({ appId })
```

## LoginRequiredError

This error is thrown when the client requires a user login and usually used to put together the URL for the login page:

```ts
import { LoginRequiredError } from '@featherscloud/auth'

try {
  const authorizationHeader = await auth.getHeader()
}
catch (error: unknown) {
  if (error instanceof LoginRequiredError) {
    // Redirect to the login page
    window.location.href = await auth.getLoginUrl(error)
  }
  else {
    throw error
  }
}
```

## CloudAuthClient

### options

- __appId__ - The application id
- __store__ (default: `IndexedDb`) - The storage for device information and access tokens.
- __loginExpiry__ (default: `15 minutes`) - The time (in seconds) a login request expires. Can not be more than 15 minutes.
- __deviceId__ (optional) - Initialize with this device (instead of the default first one)

### getAccessToken

`auth.getAccessToken()` returns the access token for the user. Will throw a `LoginRequiredError` if the user needs to log in for this device.

### getHeader

`auth.getHeaders()` returns the `Authorization` header for the current user in the required form of `Bearer <accessToken>`.

### getLoginUrl

`auth.getLoginUrl(error)` returns the URL for the login page when a `LoginRequiredError` happened.

### logout

`auth.logout()` logs the user out but remembers their device so their information is pre-filled the next time they log in.

### logoutAndForget

`auth.logoutAndForget()` logs the user out and deletes this device.

### listDevices

`auth.listDevices()` lists all devices in the store. This can be used to handle account switching.

### createDevice

`auth.createDevice()` creates a new devices and sets it as the currently used device. This will require a user to log in before they can make any requests.

### getDevice

`auth.getDevice()` returns the information (like the device id and linked user) for the current device.

### setDevice

`auth.setDevice(deviceId)` sets the currently used device (usually retrieved from `auth.listDevices()`).

## createVerifier

`createVerifier({ appId })` creates a verifier for the application id. It does not need any additional information, works offline and does not make any external requests.

```ts
import { createVerifier } from '@featherscloud/auth'

const appId = '<your-app-id>'
const verifier = createVerifier({ appId })
```

## CloudAuthVerifier

Once initialized the following methods are available.

## verifyToken

`verifier.verifyToken(accessToken [, additionalPayload])` verifies a Cloud Auth access token.

## verifyHeader

`verifier.verifyToken(authorizationHeader [, additionalPayload])` verifies an `Authorization` header.
