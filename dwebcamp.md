# Hello DWeb Camper!

Thank you for visiting! At Feathers Cloud we are working on the tools to bring local-first protocols, technologies and concepts into modern web development.

## Join the DWeb Chat

The DWeb chat at [dwebchat.feathers.dev](https://dwebchat.feathers.dev) is a **local-first chat** application that uses [Feathers Cloud Auth](./auth/index.md) for user logins and [Automerge](https://automerge.org) for synchronizing data. It combines local-first tech with with a familiar modern-web user experience, like

- Secure user logins
- Works offline
- Loads faster than server side rendering
- Deploys like any static website
- No "cloud" or special server needed
- Users own their data and (device) identity
- It is only ~250 lines of React or Svelte code (including HTML)

[Join the DWeb Chat](https://dwebchat.feathers.dev)

## About Feathers Cloud

For the past 12 years we have been maintaining [FeathersJS](https://feathersjs.com), an open source TypeScript/JavaScript framework for creating APIs and real-time applications. We've noticed growing problems in web development and we believe local-first technologies can help us address them.

![The Feathers Cloud space bird](/dweb-landing.png)

### The Growing Problem with Web Development

Developers are dealing with increased complexity when it comes to authentication, authorization, database management, and deployments (the "Cloud"). You have to learn and configure infrastructure and packages for handling millions of users just to run a small personal app (or pay extra for services that try and hide the complexity).

### The Solution: Local-first Applications

We believe that local-first applications can turn this around. We enable devs to create "small apps" that can run in any web browser and grow if necessary instead of huge apps that never scale big. Our [DWeb Chat demo](https://dwebchat.feathers.dev) shows how decentralized tech can be combined into a modern web application.

## Create your own chat

You can find the chat code [on GitHub](https://github.com/feathersdev/chat/) and create your own chat in a few steps:

1. To enable user login, sign up for [Feathers Cloud Auth](https://feathers.dev/auth/) at [app.feathers.dev](https://app.feathers.dev) and create a new organization and application with the default settings. Optionally customize your login page theme. 🤩
2. Copy the application id (`did:key:...`) at the top of the application details page.
3. Run the following in a terminal:

   ```sh
   git clone https://github.com/feathersdev/chat.git
   cd chat
   npm install
   npm run init
   ```

4. When prompted, paste your application id from step `2` and choose your framework.
5. Browse to the development server at `http://localhost:3000` and sign into your own chat using any email address.

Have a look at the [repository Readme](https://github.com/feathersdev/chat/) for more information.

## How it Works: Feathers Cloud Auth

While Cloud Auth looks like a traditional identity provider, it works a little differently under the hood. Instead of oAuth flows and shared secrets, it uses [decentralized identifiers](https://en.wikipedia.org/wiki/Decentralized_identifier) (DID) and cryptographic keys that are securely stored on each device. A devices issues [JSON Web Tokens](https://jwt.io/) (JWT) signed with that key to prove their identity.

Each Cloud Auth application has its own DID and links those device identities to a user through a traditional (email, social SMS) login. Once the login is successful it issues its own JWT (access token) for that user and device. It is self contained and can be verified by any application that trusts your application (DID) like the browser or a NodeJS, Deno, Bun or Clouflare Worker API.

For more details see the [Cloud Auth API documentation](./auth/index.md).
