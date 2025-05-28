<script setup lang="ts">
defineProps<{
  url: string
  title: string
}>()
</script>

<template>
  <NuxtLink
    :to="url"
    class="btn md:btn-lg gap-2 normal-case lg:gap-3 leading-none btn-primary"
  >
    <Flex col items-start>
      <Text class="text-primary-content/60 hidden text-xs font-normal md:block">
        Next
      </Text>
      <Text>{{ title }}</Text>
    </Flex>

    <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </NuxtLink>
</template>
