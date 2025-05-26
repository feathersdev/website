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
    <Text v-if="superTitle && !slots.superTitle" center size="lg" class="text-balance">
      {{ superTitle }}
    </Text>
    
    <slot v-if="slots.title" name="title" />
    <Text v-if="title && !slots.title" center size="5xl" class="text-balance">
      {{ title }}
    </Text>

    <slot v-if="slots.subTitle" name="subTitle" />
    <Text v-if="subTitle && !slots.subTitle" center size="lg" class="text-balance">
      {{ subTitle }}
    </Text>

    <slot v-if="slots.description" name="description" />
    <Text v-if="description && !slots.description" center size="lg" class="text-balance">
      {{ description }}
    </Text>
  </Flex>
</template>
