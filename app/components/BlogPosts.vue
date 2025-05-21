<script setup lang="ts">
import type { BlogPost } from '../../content.config'

defineProps<{
  title: string,
  description?: string,
  superTitle?: string,
  subTitle?: string,
  posts: BlogPost[]
}>()
</script>

<template>
  <div>
    <Titles 
      :superTitle="superTitle"
      :title="title"
      :subTitle="subTitle"
      :description="description"
    />
    <Flex class="mt-4 flex-wrap">
      <BlogTile 
        v-for="post in posts" 
        :key="post.id"
        :post="post"
        class="w-full md:w-1/2 lg:w-1/3"
      />
    </Flex>
  </div>
</template>