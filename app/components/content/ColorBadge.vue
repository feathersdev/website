<script setup lang="ts">
const props = defineProps<{
  color: string
}>()

const classes = computed(() => {
  return {
    'bg-primary-content text-primary': props.color === 'primary-content',
    'bg-secondary-content text-secondary': props.color === 'secondary-content',
    'bg-neutral-content text-neutral': props.color === 'neutral-content',
    'bg-accent-content text-accent': props.color === 'accent-content',
    'bg-info-content text-info': props.color === 'info-content',
    'bg-success-content text-success': props.color === 'success-content',
    'bg-warning-content text-warning': props.color === 'warning-content',
    'bg-error-content text-error': props.color === 'error-content',
  }
})
</script>

<template>
  <Badge :color="color" class="whitespace-nowrap rounded-[0.375rem] px-1  font-mono" :class="classes">
    {{ color }}
  </Badge>
</template>
