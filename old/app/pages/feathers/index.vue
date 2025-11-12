<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const { data: feathersProduct } = await useAsyncData(() => queryCollection('products').where('slug', '=', 'feathers').first())

useSeoMeta({
  title: 'FeathersJS',
  description: 'Identity. Data. Realtime.',
})
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open md:pt-16 px-4">
      <HeroProduct
        :product="feathersProduct!"
        bird-classes="relative w-[250px] sm:w-[260px] lg:w-[412px] lg:top-24 transition-all duration-500 ease-in-out floating"
        planet-classes="absolute w-[318px] lg:w-[550px] transition-all duration-500 ease-in-out -bottom-[calc(100%-14rem)] -right-60 sm:-right-20 md:-right-40 lg:top-0 lg:-right-88 planet-wobble"
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">

    <Discord />
  </div>
</template>
