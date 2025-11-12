<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const color = computed(() => {
  if (props.text === 'boolean') {
    return 'info'
  }
  return 'warning'
})
</script>

<template>
  <Badge :color="color" sm class="whitespace-nowrap">
    {{ text }}
  </Badge>
</template>
