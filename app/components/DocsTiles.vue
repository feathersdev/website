<script setup lang="ts">
defineProps<{
  superTitle?: string
  title: string
  pages: PinionCollectionItem[] | AuthCollectionItem[] | FeathersCollectionItem[]
}>()
</script>

<template>
  <div>
    <Text v-if="superTitle" size="2xl">{{ superTitle }}</Text>
    <Text size="3xl">{{ title }}</Text>
    <div v-if="pages" class="pt-6 px-3 lg:px-6 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-content text-base-100 mt-24">
      <NuxtLink class="card" :to="page.path" v-for="page in pages" :key="page.id">
        <figure class="bg-base-100 aspect-video"></figure>
        <CardBody>
          <CardTitle>{{ page.title }}</CardTitle>
          {{ page.description }}
        </CardBody>
      </NuxtLink>
    </div>
  </div>
</template>