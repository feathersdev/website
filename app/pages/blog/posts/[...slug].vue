<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const route = useRoute()
const slug = computed<string>(() => {
  return (route.params.slug as string[])?.[0] || ''
})
const { data: post } = await useAsyncData(slug, () =>
  queryCollection('blogPosts').where('slug', '=', slug.value).first(),
)

// Add reactive state to control ContentRenderer visibility
const showContent = ref(true)

// Watch for route changes to hide and re-show the ContentRenderer
watch(
  () => route.params.slug,
  () => {
    console.log('route params changed:', route.params.slug)
    showContent.value = false
    nextTick(() => {
      console.log('slug changed to:', slug.value)
      showContent.value = true
    })
  },
  { immediate: false },
)

const siteUrl = 'https://feathers.dev'
const pageUrl = computed(() => `${siteUrl}/blog/posts/${slug.value}`)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.meta?.tagline || post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.meta?.tagline || post.value?.description,
  ogImage: post.value?.meta?.imgSrc,
  ogUrl: pageUrl.value,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: post.value?.title,
  twitterDescription: post.value?.meta?.tagline || post.value?.description,
  twitterImage: post.value?.meta?.imgSrc,
})

const { data: allRecentPosts } = await useAsyncData(() =>
  queryCollection('blogPosts').order('date', 'DESC').limit(4).all(),
)

// Filter out the current post and limit to 3
const recentPosts = computed(() => {
  return allRecentPosts.value?.filter((p) => p.slug !== slug.value).slice(0, 3) || []
})
</script>

<template>
  <div
    class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden"
  >
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open pt-16">
      <NuxtLink to="/blog" class="btn btn-ghost my-10">
        <Icon name="feather:chevron-left" size="24" />
        Back to Blog
      </NuxtLink>

      <Bird404 v-if="!post" />
    </div>
    <div class="h-64 mt-4"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <div v-if="post" class="prose mx-auto mb-24">
      <figure class="aspect-video">
        <img
          :src="post?.meta?.imgSrc"
          :alt="post?.title!"
          class="object-cover h-full w-full object-center rounded-lg"
        />
      </figure>

      <Titles :title="post?.title!" :sub-title="post?.meta?.tagline!" />

      <ContentRenderer v-if="post && showContent" :key="post?.slug" :value="post" />
    </div>

    <div class="px-4 md:pt-8 md:pb-7 md:px-5">
      <Text is="h2" semibold size="2xl" class="px-4">
        {{ post ? 'You might also like' : 'Try one of these posts' }}
      </Text>
      <BlogPosts :posts="recentPosts!" class="mt-4" />
    </div>
  </div>
</template>
