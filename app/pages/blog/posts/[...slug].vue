<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const route = useRoute()
const slug = computed<string>(() => {
  return (route.params.slug as string[])?.[0] || ''
})

const { data: posts } = await useAsyncData(
  'all',
  () => queryCollection('blogPosts').order('date', 'DESC').all()
)
const { data: post } = await useAsyncData(
  slug,
  () => queryCollection('blogPosts').where('slug', '=', slug.value).first()
)

const postIndex = computed(() => posts.value?.findIndex((_post) => _post.slug === slug.value))
const prevPost = computed(() => posts.value?.[postIndex.value! - 1])
const nextPost = computed(() => posts.value?.[postIndex.value! + 1])

// Add reactive state to control ContentRenderer visibility
const showContent = ref(true)

// Watch for route changes to hide and re-show the ContentRenderer
watch(() => route.params.slug, () => {
  console.log('route params changed:', route.params.slug)
  showContent.value = false
  nextTick(() => {
    console.log('slug changed to:', slug.value)
    showContent.value = true
  })
}, { immediate: false })

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
      <figure class="aspect-video">
        <img :src="post?.meta?.imgSrc" :alt="post?.title!" class="object-cover h-full w-full object-center">
      </figure>

      <Titles :title="post?.title!" :sub-title="post?.meta?.tagline!"/>

      <ContentRenderer v-if="post && showContent" :key="post?.slug" :value="post"  />

      <Flex row items-center justify-between>
        <div>
          <Flex col v-if="nextPost">
            <Text xs>Newer Post</Text>
            <NuxtLink :to="nextPost.path" class="btn btn-neutral hover:btn-primary">
              <Icon name="feather:chevron-left" size="24" />
              {{ nextPost.title }}
            </NuxtLink>
          </Flex>
        </div>
        <div>
          <Flex col v-if="prevPost">
            <Text xs>Previous Post</Text>
            <NuxtLink :to="prevPost.path" class="btn btn-neutral hover:btn-primary">
              {{ prevPost.title }}
              <Icon name="feather:chevron-right" size="24" />
            </NuxtLink>
          </Flex>
        </div>
      </Flex>
    </div>

    <div class="px-4 md:pt-8 md:pb-7 md:px-5">
      <Text is="h2" semibold size="2xl" class="px-4">
        {{ post ? 'You might also like' : 'Try one of these posts'}}
      </Text>
      <BlogPosts :posts="recentPosts!" class="mt-4" />
    </div>
  </div>
</template>
