<script setup lang="ts">
import type { BlogPostsCollectionItem } from '@nuxt/content'

defineProps<{
  post: BlogPostsCollectionItem
  cardClasses?: string
}>()
</script>

<template>
  <div>
    <Card :class="cardClasses">
      <figure class="aspect-video !rounded-box m-4">
        <img :src="post.meta.imgSrc" :alt="post.title" class="object-cover h-full w-full object-center">
      </figure>
      <CardBody class="gap-6">
        <CardTitle>{{ post.title }}</CardTitle>
        <p>{{ post.description }}</p>

        <CardActions class="mt-4">
          <NuxtLink :to="post.path" class="btn btn-primary btn-ghost">
            Read More 
            <Icon name="feather:chevron-right" size="24" />
          </NuxtLink>
        </CardActions>
      </CardBody>
    </Card>
  </div>
</template>