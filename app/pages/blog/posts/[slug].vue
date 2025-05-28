<script lang="ts" setup>
// import { parseMarkdown } from '#imports'

definePageMeta({
  layout: 'page',
})

const route = useRoute()
const slug = computed<string>(() => route.params.slug as string)

const { data: post } = await useAsyncData(
  slug,
  () => queryCollection('blogPosts').where('slug', '=', slug.value).first()
)

// const body = ref<any>(await parseMarkdown(post.value?.body || ''))
// watch(post, async () => {
//   if (post.value?.body) {
//     body.value = await parseMarkdown(post.value?.body)
//   }
// })

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
})

const { data: recentPosts } = await useAsyncData(() => queryCollection('blogPosts').order('date', 'DESC').limit(3).all())
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open pt-16">
      <NuxtLink to="/blog" class="btn mt-2">
        <Icon name="feather:chevron-left" size="24" />
        Back to Blog
      </NuxtLink>

      <Bird404 v-if="!post" />
    </div>
    <div class="h-64 mt-4"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <div v-if="post" class="prose mx-auto mb-24">
      <figure class="aspect-video m-4">
        <img :src="post?.meta?.imgSrc" :alt="post?.title!" class="object-cover h-full w-full object-center">
      </figure>

      <Titles :title="post?.title!" :sub-title="post?.meta?.tagline!"/>

      <!-- <ContentRenderer v-if="body" :value="body" /> -->
    </div>

    <div class="px-4 md:pt-8 md:pb-7 md:px-5">
      <Text is="h2" semibold size="2xl" class="px-4">
        {{ post ? 'You might also like' : 'Try one of these posts'}}
      </Text>
      <BlogPosts :posts="recentPosts!" class="mt-4" />
    </div>
  </div>
</template>
