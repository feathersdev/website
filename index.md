---
layout: page
sidebar: false

title: feathers.dev
titleTemplate: Authentication and open source tools for developers
---

<script setup lang="ts">
import HomeHero from './components/HomeHero.vue'
</script>

<HomeHero class="mb-12">

<template #cli>

```sh
npx @featherscloud/cli example
```

</template>

<template #cli2>

```sh
npx @featherscloud/cli integrate
```

</template>

</HomeHero>

<style lang="postcss">
.cli-block span[class="lang"] {
  display: none;

}
</style>
