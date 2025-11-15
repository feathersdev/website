<script setup lang="ts">
import type { BlogPostsCollectionItem } from '@nuxt/content'

defineProps<{
  posts: BlogPostsCollectionItem[]
}>()
</script>

<template>
  <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <BlogPostTile
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>