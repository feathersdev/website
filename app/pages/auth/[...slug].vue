<script setup lang="ts">
const route = useRoute()

const pathWithoutHtml = computed(() => route.path.replace('.html', ''))
if (route.path.includes('.html')) {
  navigateTo(pathWithoutHtml.value, { redirectCode: 301 })
}

const { data: page } = await useAsyncData(
  () => pathWithoutHtml.value,
  () => queryCollection('auth').path(route.path).first(),
)

definePageMeta({
  layout: 'docs',
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <div v-if="page" class="pt-6 px-3 lg:px-6 bg-base-100 prose mx-auto">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
