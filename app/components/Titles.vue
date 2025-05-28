<script setup lang="ts">
defineProps<{ 
  superTitle?: string 
  title: string, 
  subTitle?: string
  description?: string
}>()

const slots = defineSlots<{ 
  superTitle?: string 
  title: string, 
  subTitle?: string
  description?: string
}>()
</script>

<template>
  <Flex col items-center class="gap-4">
    <slot v-if="slots.superTitle" name="superTitle" />
    <Text v-if="superTitle && !slots.superTitle" center size="md" class="text-balance md:text-lg">
      {{ superTitle }}
    </Text>
    
    <slot v-if="slots.title" name="title" />
    <Text v-if="title && !slots.title" center size="4xl" class="text-balance md:text-5xl">
      {{ title }}
    </Text>

    <slot v-if="slots.subTitle" name="subTitle" />
    <Text v-if="subTitle && !slots.subTitle" center size="md" class="text-balance md:text-lg">
      {{ subTitle }}
    </Text>

    <slot v-if="slots.description" name="description" />
    <Text v-if="description && !slots.description" center size="md" class="text-balance md:text-lg">
      {{ description }}
    </Text>
  </Flex>
</template>
