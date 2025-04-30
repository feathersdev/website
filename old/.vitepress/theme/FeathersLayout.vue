<script setup lang="ts">
import { onContentUpdated, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onBeforeUnmount, onMounted } from 'vue'
import Footer from '../../components/Footer.vue'

import BlogLayoutAsideTop from '../components/blog/BlogLayoutAsideTop.vue'
import BlogPostLayoutBottom from '../components/blog/BlogPostLayoutBottom.vue'
import BlogPostLayoutTop from '../components/blog/BlogPostLayoutTop.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const ONE_DAY = 24 * 60 * 60 * 1000

function getAppId() {
  const urlParams = new URLSearchParams(window.location.search)
  const urlAppId = urlParams.get('appId')

  if (urlAppId && urlAppId.startsWith('did:key:')) {
    localStorage.setItem('appId', urlAppId)
    localStorage.setItem('lastAccess', Date.now().toString())
  }

  const lastAccess = Number.parseInt(localStorage.getItem('lastAccess') || '0')

  // Check if lastAccess was more than 1 day ago, we don't want to store appId longer than that
  if (lastAccess + ONE_DAY < Date.now()) {
    localStorage.removeItem('appId')
    localStorage.removeItem('lastAccess')
  }

  return localStorage.getItem('appId') || null
}

onContentUpdated(() => {
  const appId = getAppId()

  if (appId) {
    document.body.querySelectorAll('span').forEach((el) => {
      if (el.textContent !== null && el.textContent.trim() === '\'<your-app-id>\'') {
        el.textContent = el.textContent.replace('\'<your-app-id>\'', `'${appId}'`)
      }
    })
  }
})
onMounted(() => {
  document.body.classList.add('blog')
})
onBeforeUnmount(() => {
  document.body.classList.remove('blog')
})
</script>

<template>
  <Layout>
    <template #doc-before>
      <BlogPostLayoutTop v-if="frontmatter.blog === 'post'" />
      <!-- <VPBLayoutAuthorTop v-if="frontmatter.blog === 'author'" /> -->
    </template>

    <template #doc-after>
      <BlogPostLayoutBottom v-if="frontmatter.blog === 'post'" mt-8 />
    </template>

    <template #aside-top>
      <BlogLayoutAsideTop v-if="frontmatter.blog === 'post'" />
    </template>

    <template #aside-bottom />
  </Layout>

  <Footer />
</template>

<style>
/* hide the dark mode toggle in mobile view */
.VPNavScreenAppearance {
  display: none !important;
}

@media (min-width: 1440px) {
  .VPNavBar.has-sidebar .title {
    padding-left: 0 !important;
    margin-left: max(32px, calc((100% - (var(--vp-layout-max-width))) / 2)) !important;
  }
}
</style>
