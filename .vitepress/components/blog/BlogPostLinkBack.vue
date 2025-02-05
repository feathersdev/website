<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { VPBThemeConfig } from '../../blog-types'

const { site } = useData()

const theme = site.value.themeConfig as VPBThemeConfig
const path = withBase(theme.blog?.path ?? '/blog/')
</script>

<template>
  <div class="py-3">
    <a class="link text-sm" :href="withBase(path)">← Back to the blog</a>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
