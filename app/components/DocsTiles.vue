<script setup lang="ts">
import type { AuthCollectionItem, FeathersCollectionItem, PinionCollectionItem } from '@nuxt/content';

defineProps<{
  superTitle?: string
  title: string
  pages: (PinionCollectionItem | AuthCollectionItem | FeathersCollectionItem)[]
}>()
</script>

<template>
  <Flex col class="bg-base-content text-base-100 mt-24 mx-auto max-w-5xl">
    <Flex col class="pt-3">
      <Text center v-if="superTitle">{{ superTitle }}</Text>
      <Text center size="3xl">{{ title }}</Text>
    </Flex>

    <div v-if="pages" class="pt-6 px-3 lg:px-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <NuxtLink class="card" :to="page.path" v-for="page in pages" :key="page.id">
        <figure class="bg-base-100 aspect-video"></figure>
        <CardBody>
          <CardTitle>{{ page.title }}</CardTitle>
          {{ page.description }}
        </CardBody>
      </NuxtLink>
    </div>
  </Flex>
</template>