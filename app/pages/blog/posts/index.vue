<script lang="ts" setup>
definePageMeta({
  layout: 'page'
})

const { data: posts } = await useAsyncData(() => queryCollection('blogPosts').order('date', 'DESC').all())
const mostRecentPost = computed(() => posts.value?.[0])
const otherPosts = computed(() => posts.value?.slice(1))
</script>

<template>
  <div
    class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden"
  >
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open pt-16 px-4">
      <Titles
        title="Latest News"
        sub-title="Stay up to date with the latest Feathers news and updates"
        class="py-24"
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-4 md:p-6 md:pt-12 lg:p-12">
    <div class="pb-4 pt-6 md:pt-8 md:pb-7 md:px-5 bg-base-300/50 rounded-4xl">
      <Text is="h2" semibold size="2xl" class="px-4"> Latest Post </Text>
      <BlogPostTile :post="mostRecentPost!" card-classes="xl:card-side" />
    </div>

    <div class="p-2 md:pt-8 md:pb-7 md:px-5 mt-24">
      <Text is="h2" semibold size="2xl" class="px-4"> Recent Posts </Text>
      <BlogPosts :posts="otherPosts!" class="my-12" />
    </div>
  </div>
</template>
