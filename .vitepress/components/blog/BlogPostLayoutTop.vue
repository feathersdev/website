<script setup lang="ts">
import { usePosts } from '../../composables/use-posts'
import BlogPostDate from './BlogPostDate.vue'
import Category from './Category.vue'

const { post } = usePosts()
</script>

<template>
  <div class="mb-6 lg:mb-10">
    <header class="space-y-2">
      <div
        v-if="post.imgSrc"
        class="w-full mb-6 rounded-lg overflow-hidden"
        :class="post.imgContainerClasses || 'h-72'"
      >
        <img
          :src="post.imgSrc"
          :alt="post.title"
          :class="post.imgClasses || 'object-cover object-center h-full w-full'"
        >
      </div>

      <div class="flex flex-row items-center gap-x-2">
        <Category v-if="post.category" :category="post.category" />
        <span v-if="post.category" class="text-sm opacity-50">|</span>
        <BlogPostDate />
      </div>

      <h1
        class="
        text-3xl font-extrabold leading-9 tracking-tight text-white/85
        md:leading-14 md:text-5xl
        sm:text-4xl sm:leading-10"
      >
        {{ post.title }}
      </h1>
    </header>
    <BlogPostAuthor />
  </div>
</template>
