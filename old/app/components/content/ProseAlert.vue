<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<template>
  <Alert class="not-prose" v-bind="$props">
    <slot />
  </Alert>
</template>
