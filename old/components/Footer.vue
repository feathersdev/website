<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
// import { discord, github } from '../.vitepress/meta'
import FooterList from './FooterList.vue'

const route = useRoute()
const { theme, frontmatter } = useData()

function ensureStartingSlash(path: any) {
  return /^\//.test(path) ? path : `/${path}`
}
function getSidebar(sidebar: any, path: any) {
  if (Array.isArray(sidebar)) {
    return sidebar
  }

  if (sidebar == null) {
    return []
  }

  path = ensureStartingSlash(path)
  const dir = Object.keys(sidebar)
    .sort((a, b) => {
      return b.split('/').length - a.split('/').length
    })
    .find((dir) => {
      // make sure the multi sidebar key starts with slash too
      return path.startsWith(ensureStartingSlash(dir))
    })
  return dir ? sidebar[dir] : []
}

const sidebar = computed(() => {
  const sidebarConfig = theme.value.sidebar
  const relativePath = route.data.relativePath
  return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
})
const hasSidebar = computed(() => {
  return (
    frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== 'home'
  )
})

const productList = [
  { label: 'Auth', link: '/auth/' },
  { label: 'Consulting', link: '/consulting.html' },
]
const openList = [
  { label: 'Pinion', link: '/pinion/' },
  { label: 'Feathers', link: 'https://feathersjs.com' },
]
const aboutList = [
  { label: 'Blog', link: '/blog/' },
  { label: 'Terms of Service', link: '/tos.html' },
  { label: 'Privacy Policy', link: '/privacy.html' },
]
</script>

<template>
  <footer
    class="VPContent feathers-footer bg-neutral text-neutral-content"
    :class="{
      'has-sidebar': hasSidebar,
      'is-home': frontmatter.layout === 'home',
    }"
  >
    <div class="flex flex-col justify-center mb-12">
      <BlogSubscribeForm class="inline-block mx-auto" />
    </div>
    <div class="max-w-6xl w-full mx-auto px-4">
      <div class="sidebar-adjust">
        <div class="title flex flex-row items-center justify-center sm:justify-start sm:ml-8 pb-6">
          <img class="logo invert sm:ml-0" src="/logo-cloud.svg">
        </div>

        <div class="flex flex-col text-center sm:text-left sm:flex-row gap-12 flex-wrap sm:flex-nowrap mt-6 sm:ml-10">
          <FooterList title="Products" :items="productList" class="w-full " />
          <FooterList title="Open Source" :items="openList" class="w-full " />
          <FooterList title="About" :items="aboutList" class="w-full " />
        </div>

        <div class="h-1 bg-primary rounded-full mt-16" />

        <div class="py-6 text-sm text-center">
          <p class="message">
            {{ theme.footer.message }}
          </p>
          <p class="copyright">
            {{ theme.footer.copyright }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 960px) {
  #app:not(.home-page) .VPContent.has-sidebar {
    margin: var(--vp-layout-top-height, 0px) 0 0;
  }
}

@media (min-width: 1440px) {
  #app:not(.home-page) .VPContent.has-sidebar {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}
</style>
