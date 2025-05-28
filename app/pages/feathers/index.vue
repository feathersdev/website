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
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open pt-16 px-4">
      <HeroProduct
        :product="feathersProduct!"
        bird-classes=""
        planet-classes=""
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">

    <Discord />
  </div>
</template>
