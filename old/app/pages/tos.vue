<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const { data: page } = await useAsyncData(() => queryCollection('pages').where('path', '=', '/pages/tos').first())

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <div v-if="page" class="prose mx-auto">
    <div class="h-24"></div>
    <ContentRenderer :value="page" />
  </div>
</template>