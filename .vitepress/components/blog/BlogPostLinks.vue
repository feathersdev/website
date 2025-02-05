<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { usePosts } from '../../composables/use-posts'
import type { VPBThemeConfig } from '../../blog-types'

defineProps<{
  insideDoc?: boolean
}>()

const { site } = useData()
const { newerPost, olderPost } = usePosts()

const theme = site.value.themeConfig as VPBThemeConfig
const path = withBase(theme.blog?.path ?? '/blog/')
</script>

<template>
  <footer class="mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5">
    <div v-if="newerPost || olderPost" class="flex flex-row">
      <div
        class="flex w-1/2 rounded-l-xl overflow-hidden relative right-[2px]"
        :class="[newerPost ? 'border-2 border-solid border-[var(--accent)]' : 'bg-[var(--accent)]']"
      >
        <a
          v-if="newerPost"
          :href="`${newerPost.url}`"
          class=" block p-4"
        >
          <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-white mb-0.5">
            Newer Post
          </p>
          <div class="link">
            {{ newerPost.title }}
          </div>
        </a>
        <div v-else class="select-none flex items-center justify-center w-full bg-[var(--accent)] p-4 text-center">
          This is the newest post
        </div>
      </div>

      <div
        class="flex w-1/2 rounded-r-xl overflow-hidden relative right-[2px]"
        :class="[olderPost ? 'border-2 border-solid border-[var(--accent)]' : 'bg-[var(--accent)]']"
      >
        <a
          v-if="olderPost"
          :href="`${olderPost.url}`"
          class="block px-4 py-4 rounded-r-xl h-full w-full"
        >
          <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-white mb-0.5">
            Earlier Post
          </p>
          <div class="link">
            {{ olderPost.title }}
          </div>
        </a>
        <div v-else class="select-none flex items-center justify-center w-full bg-[var(--accent)] px-4 text-center">
          This is the oldest post
        </div>
      </div>
    </div>

    <div class="pt-3">
      <a class="link" :href="withBase(path)">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
