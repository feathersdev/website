<script setup lang="ts">
const route = useRoute()
const productSlug = computed(() => route.path.split('/')[1])

const { data: docsSections } = await useAsyncData(
  () => productSlug.value,
  () => queryCollectionNavigation(productSlug.value, ['meta']),
)
</script>

<template>
  <Text bold size="6xl">
    Feathers Pinion
  </Text>

  <DocsTiles
    super-title="Learning and Resources"
    title="Feathers Pinion Explained"
    :pages="docsSections[0].children"
  />
</template>
