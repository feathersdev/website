---
layout: page
sidebar: false

title: Feathers Cloud
titleTemplate: Auth for builders
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
