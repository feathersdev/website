<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

const { data: pinionProduct } = await useAsyncData(() => queryCollection('products').where('slug', '=', 'pinion').first())
const { data: pinionDocs } = await useAsyncData(() => queryCollection('pinionDocs').order('id', 'ASC').all())

useSeoMeta({
  title: 'FeathersJS',
  description: 'Identity. Data. Realtime.',
})
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open lg:pt-16 px-4">
      <HeroProduct
        :product="pinionProduct!"
        bird-classes="relative w-[230px] sm:w-[260px] lg:w-[412px] lg:top-24 transition-all duration-500 ease-in-out floating"
        planet-classes="absolute w-[318px] lg:w-[550px] transition-all duration-500 ease-in-out -bottom-[calc(100%-18rem)] -right-50 sm:-right-40 md:-right-30 lg:top-0 lg:-right-108 planet-wobble"
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <Titles title="Feathers Pinion Explained" class="pt-6 mb-6" />

    <DocsTiles 
      :pages="pinionDocs!"
      class="mb-24"
    />

    <Discord />
  </div>
</template>
