<script setup lang="ts">
import { usePosts } from '../../composables/use-posts'
import Category from './Category.vue'

defineProps<{
  insideDoc?: boolean
}>()

const { post } = usePosts()
</script>

<template>
  <div class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
    <span class="bg-primary-100 inline-flex items-center rounded text-sm font-medium">
      <Category :category="post.category" />
    </span>
  </div>
</template>
