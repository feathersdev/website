<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  primary: Boolean,
  secondary: Boolean,
  href: String,
})

const classes = computed(() => {
  return {
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
  }
})
</script>

<template>
  <a
    :href="href"
    class="btn text-md py-2.8 px-12 rounded-full"
    :class="classes"
  >
    <slot />
  </a>
</template>
