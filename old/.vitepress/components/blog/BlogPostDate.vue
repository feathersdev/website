<script setup lang="ts">
import { usePosts } from '../../composables/use-posts'

const { post } = usePosts()

function getDateTime() {
  return new Date(post.value.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dt class="sr-only">
      Published on
    </dt>
    <dd class="text-base font-medium leading-6 text-gray-400 m-0">
      <time :datetime="getDateTime()">{{ post.date.formatted }}</time>
    </dd>
  </dl>
</template>
