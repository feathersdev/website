<script setup lang="ts">
defineProps<{ 
  superTitle?: string 
  title: string, 
  subTitle?: string
  description?: string
}>()
</script>

<template>
  <Flex col items-center class="gap-4">
    <Text v-if="superTitle" center size="lg" class="text-balance">
      {{ superTitle }}
    </Text>
    <Text center size="5xl" class="text-balance">
      {{ title }}
    </Text>
    <Text v-if="subTitle" center size="lg" class="text-balance">
      {{ subTitle }}
    </Text>
    <Text v-if="description" center size="lg" class="text-balance">
      {{ description }}
    </Text>
  </Flex>
</template>
