<script setup lang="ts">
import type { AuthCollectionItem, FeathersCollectionItem, PinionCollectionItem } from '@nuxt/content';

defineProps<{ page: PinionCollectionItem | AuthCollectionItem | FeathersCollectionItem }>()
</script>

<template>
  <div v-if="page" class="pt-6 px-3 lg:px-6 bg-base-100 prose mx-auto max-w-3xl">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
