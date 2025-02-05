<script setup lang="ts">
import { useData } from 'vitepress'
import type { VPBThemeConfig } from '../../blog-types'

defineProps<{
  category: string
}>()
const { theme } = useData<VPBThemeConfig>()
</script>

<template>
  <a
    :href="`/blog/${category.toLowerCase()?.replace(' ', '-')}`"
    class="px-2 py-0.5 rounded text-[15px]
    text-[color:var(--vp-c-brand)] bg-[var(--neutral60)]
    transition-colors duration-200
    hover:bg-[var(--primary)] hover:text-white"
    @click.stop
  >
    <div
      v-if="
        theme.blog?.categoryIcons
          && theme.blog.categoryIcons[category.toLowerCase()]
      "
      :class="theme.blog.categoryIcons[category.toLowerCase()]"
    />
    <span>{{ category }}</span>
  </a>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>../../site-types
