<script setup lang="ts">
import type { Post } from '../../blog-types'

defineProps<{
  post: Post
  path: string
}>()
</script>

<template>
  <a
    v-for="tagName in post.tags"
    :key="tagName"
    class="rounded-sm bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600"
    :href="`${path}?init=${tagName}`"
  >
    <TagIcon :tag="tagName" />
    {{ tagName }}
  </a>
</template>
