---
date: 2025-11-14
title: 'A first look at local-first Feathers'
slug: 2025-11-14-a-first-look-at-local-first-feathers
tagline: 'A recap of the first demo of creating a Feathers application without a server'
author: David Luecke
category: Feathers
imgSrc: https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/bdb1ad17-8dca-4d58-ce82-2609d9de3000/public
imgContainerClasses: 'h-64 sm:h-96 md:h-120'
tags:
  - feathers
  - local-first
  - automerge
---

One of the things I always liked about the architecture of Feahters JS is that is is transport agnostic. Which is why you could always use the same services through a REST API and also through websockets - in which case you also got real-time updates.

- Feathers was always meant to be transport agnostic
- Introduce CRDTs as a transport mechanism, specifically Automerge
