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
    <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>

    <Flex col items-start>
      <Text class="text-primary-content/60 hidden text-xs font-normal md:block">
        Prev
      </Text>
      <Text>{{ title }}</Text>
    </Flex>
  </NuxtLink>
</template>
