<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useAuthors } from '../../composables/use-authors'

const props = defineProps<{
  name: string
}>()

const { site } = useData()
const { findByName } = useAuthors()

const author = computed(() => {
  return findByName(props.name)
})
</script>

<template>
  <div v-if="author" class="flex items-center space-x-4">
    <img
      v-if="author.avatar"
      class="h-7 w-7 rounded-full"
      :src="author.avatar"
      :alt="author.name"
    >
    <img
      v-else-if="author.gravatar"
      class="h-7 w-7 rounded-full"
      :src="`https://gravatar.com/avatar/${author.gravatar}`"
      :alt="author.name"
    >

    <span class="font-medium dark:text-white">
      {{ author.name }}
    </span>
  </div>
  <div v-else />
</template>

<style scoped></style>
