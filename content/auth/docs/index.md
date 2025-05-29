---
title: Overview
outline: deep
---

# Feathers Auth

Feathers Auth adds secure and scalable user authentication to any web application. It works with any frontend framework and with NodeJS, Cloudflare Workers, Deno or Bun and even on websites with no backend at all. It also comes with an offline-first data synchronization features that lets you create real-time web applications without a server.

## Setting up

To get started, go to [app.feathers.dev](https://app.feathers.dev) and sign up for an account. Create an organization and an application. Then, on your new application page, click the link for the web framework or server platform you want to integrate. You can also edit the theme of your login page to match your brand.

Here is the login page for our offline-first chat application:

<img src="/img/feathers-chat-login.png" alt="Feathers Chat login" width="60%" />

## How it works

While Feathers Auth looks similar to traditional identity providers by letting users log in through a login page, it works a little different under the hood. Instead of oAuth flows and shared secrets, it uses cryptographic keys that are securely stored on each device and links them to a user identity.

The only thing needed to verify a user identity is the public application identifier. It is self contained and requires no backend, secrets or additional server requests. It even works offline.
