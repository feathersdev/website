<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { usePosts } from '../../composables/use-posts'
import type { VPBThemeConfig } from '../../blog-types'
import BlogPostLinkBack from './BlogPostLinkBack.vue'

const { site } = useData()
const { post } = usePosts()
const theme = site.value.themeConfig as VPBThemeConfig
const path = withBase(theme.blog?.tagsPath ?? '/blog/tags')
</script>

<template>
  <BlogPostLinkBack />
</template>
