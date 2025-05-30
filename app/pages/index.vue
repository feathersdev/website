<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const { data: posts } = await useAsyncData(() => queryCollection('blogPosts').order('date', 'DESC').all())
const { data: products } = await useAsyncData(() => queryCollection('products').where('published', '=', true).all())

useSeoMeta({
  title: 'feathers.dev',
  description: 'Identity. Data. Realtime.',
})
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open md:pt-16 px-4">
      <HeroHome />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl pt-12 lg:p-12">
    <!-- <ValueGuide /> -->

    <Products 
      title="Our Products"
      description="Explore our suite of tools designed to help you build modern web applications with confidence."
      :products="products || []"
    />

    <Titles title="Latest News" sub-title="Stay up to date with the latest Feathers news and updates" class="mt-30 mb-8"/>
    <BlogPosts :posts="posts || []" class="my-24" />

    <Discord class="mx-4" />
  </div>
</template>
