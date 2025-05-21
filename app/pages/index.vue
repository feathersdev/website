<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const { data: posts } = await useAsyncData(() => queryCollection('blogPosts').order('date', 'DESC').all())

useSeoMeta({
  title: 'Feathers.dev',
  description: 'Build Faster. Launch Smarter',
})
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[87rem] lg:drawer-open pt-16 px-4">
      <HeroHome />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[87rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <!-- <ValueGuide /> -->

    <BlogPosts 
      title="Latest News"
      sub-title="Stay up to date with the latest Feathers news and updates"
      :posts="posts || []" 
    />

    <Discord />
  </div>
</template>
