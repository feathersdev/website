<script setup lang="ts">
import { useData } from 'vitepress'
import { usePosts } from '../../composables/use-posts'
import BlogListingTile from './BlogListingTile.vue'
import CategoriesNav from './CategoriesNav.vue'

const props = withDefaults(defineProps<{
  category?: string
}>(), {
  category: 'All',
})

const { posts } = usePosts()
const { theme } = useData()

const categoryPosts = posts.filter(post =>
  props.category !== 'All'
    ? post.category?.toLowerCase() === props.category?.toLowerCase()
    : true)

// Find the first pinned post. Reverse the array so we have to unpin one post to pin another.
const pinnedPosts = categoryPosts.slice().reverse().filter(post => post.pinned)
const nonPinnedPosts = categoryPosts.filter(post => !post.pinned)
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-3 sm:px-12 md:px-24 lg:px-6 py-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-dark)] lg:text-4xl!">
        {{ theme.blog?.title }}
      </h2>

      <CategoriesNav :category="category" />
    </div>

    <div v-if="pinnedPosts.length || nonPinnedPosts.length">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:mb-8">
        <div v-for="post of pinnedPosts" :key="post.url" class="relative">
          <BlogListingTile
            :post="post"
            wide
            class="w-full h-full"
          />
          <button type="button" class="absolute top-2 right-2 bg-black border-white/50 border-solid border px-2 py-0.5 rounded">
            Featured Post
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <BlogListingTile
          v-for="post of nonPinnedPosts"
          :key="post.url"
          :post="post"
          class="w-full"
        />
      </div>
    </div>

    <div v-else class="text-center flex flex-col gap-2">
      <p> No posts about {{ category }}, yet. </p>
      <p><a href="/blog/" class="text-[color:var(--vp-c-brand)]">See all posts</a></p>
    </div>
  </div>
</template>
