<script setup lang="ts">
import type { BlogPost } from '../../content.config'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <div>
    <Card class="h-full border-base-100" >
      <CardBody class="gap-6">
        <figure class="aspect-video rounded-box">
          <img :src="post.meta.imgSrc" :alt="post.title" class="object-cover h-full w-full object-center">
        </figure>
        <CardTitle>{{ post.title }}</CardTitle>
        <p>{{ post.description }}</p>

        <CardActions class="mt-4">
          <Button primary ghost>
            Read More 
            <Icon name="feather:chevron-right" size="24" />
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  </div>
</template>