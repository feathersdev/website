<script setup lang="ts">
definePageMeta({
  layout: 'page',
})

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
    <Flex col items-center class="gap-4">
      <Text center size="5xl" bold class="text-balance">
        How can we help you?
      </Text>
      <Text center size="lg">
        Select an answer below to get started.
      </Text>
    </Flex>

    <Discord />
  </div>
</template>
