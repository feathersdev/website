<script setup lang="ts">
import type { BlogPostsCollectionItem } from '@nuxt/content'

defineProps<{
  posts: BlogPostsCollectionItem[]
}>()
</script>

<template>
  <Flex class="mt-4 flex-wrap">
    <BlogPostTile 
      v-for="post in posts" 
      :key="post.id"
      :post="post"
      class="w-full md:w-1/2 lg:w-1/3"
    />
  </Flex>
</template>