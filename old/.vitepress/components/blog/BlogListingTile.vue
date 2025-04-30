<script setup lang="ts">
import type { Post } from '../../blog-types'
import PostCategory from './Category.vue'
import AuthorTile from './AuthorTile.vue'

defineProps<{
  post: Post
  wide?: boolean
}>()
</script>

<template>
  <div class="flex flex-col relative">
    <PostCategory :category="post.category" class="absolute top-2 left-2 z-10" />

    <a
      :href="post.url"
      style="text-decoration: none;"
      class="
        flex flex-col h-full
        rounded-lg border border-solid border-white/10 shadow-md
        transition-colors duration-200
        hover:bg-white/3 focus:bg-white/3
      "
    >
      <div
        class="text-gray-500 relative rounded-t-lg overflow-hidden"
        :class="[wide ? 'h-64 md:h-140' : 'h-64']"
      >
        <div class="h-full overflow-hidden bg-black/30">
          <img
            v-if="post.imgSrc"
            :src="post.imgSrc"
            :alt="post.title"
            class="object-cover object-center h-full w-full"
          >
        </div>
      </div>

      <div class="flex flex-col px-5 pb-6 flex-grow">
        <h2 class="mb-2 mt-0! border-t-none! text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
          {{ post.title }}
        </h2>
        <div class="mb-5 font-light flex-grow">{{ post.tagline }}</div>

        <div class="flex items-center justify-between pt-4">
          <AuthorTile :name="post.author" />
          <time class="text-right" :datetime="new Date(post.date.time).toISOString()">{{ post.date.formatted }}</time>
        </div>
      </div>
    </a>
  </div>
</template>
