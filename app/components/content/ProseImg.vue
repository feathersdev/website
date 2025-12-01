<script setup lang="ts">
import { withBase } from 'ufo'
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL)

  return props.src
})
</script>

<template>
  <div class="prose-img text-center mb-4">
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height" class="mb-1 rounded-md" />
    <small v-if="alt">{{ alt }}</small>
  </div>
</template>
