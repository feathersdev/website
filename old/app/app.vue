<script setup lang="ts">
useHead({
  title: 'feathers.dev',
  htmlAttrs: {
    lang: 'en',
    'data-theme': 'feathers',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
