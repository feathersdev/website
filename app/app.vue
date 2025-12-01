<script setup lang="ts">
const siteUrl = 'https://feathers.dev'
const siteName = 'feathers.dev'
const defaultTitle = 'feathers.dev - Identity. Data. Realtime. Beyond the Cloud.'
const defaultDescription = 'Modern web application development with secure user logins, local-first data synchronization and real-time updates. All in one place.'
const defaultImage = `${siteUrl}/img/moon-surface.svg`

useHead({
  title: defaultTitle,
  htmlAttrs: {
    lang: 'en',
    'data-theme': 'feathers',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})

useSeoMeta({
  title: defaultTitle,
  description: defaultDescription,
  ogTitle: defaultTitle,
  ogDescription: defaultDescription,
  ogImage: defaultImage,
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: defaultTitle,
  twitterDescription: defaultDescription,
  twitterImage: defaultImage,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
