<script setup lang="ts">
import type { AuthDocsCollectionItem, FeathersDocsCollectionItem, PinionDocsCollectionItem } from '@nuxt/content';

defineProps<{ page: PinionDocsCollectionItem | AuthDocsCollectionItem | FeathersDocsCollectionItem }>()
</script>

<template>
  <div v-if="page" class="pt-6 px-3 lg:px-6 prose mx-auto max-w-full w-full">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
