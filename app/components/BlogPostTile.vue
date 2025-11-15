<script setup lang="ts">
import type { BlogPostsCollectionItem } from '@nuxt/content'

defineProps<{
  post: BlogPostsCollectionItem
  cardClasses?: string
}>()
</script>

<template>
  <NuxtLink :to="post.path" class="block h-full">
    <Card :class="['h-full hover:shadow-xl transition-shadow cursor-pointer', cardClasses]">
      <figure class="h-52 !rounded-box md:m-4 overflow-hidden">
        <img :src="post.meta.imgSrc" :alt="post.title" class="object-cover h-full w-full object-center" />
      </figure>
      <CardBody class="gap-6 flex flex-col flex-1">
        <CardTitle>{{ post.title }}</CardTitle>
        <p class="line-clamp-3">{{ post.description }}</p>

        <CardActions class="mt-auto">
          <span class="btn btn-primary btn-ghost">
            Read More
            <Icon name="feather:chevron-right" size="24" />
          </span>
        </CardActions>
      </CardBody>
    </Card>
  </NuxtLink>
</template>
