<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const slotWrapper = ref(null)
const innerHtml = computed(() => {
  if (slotWrapper.value) {
    return slotWrapper.value.innerHtml
  }
  else {
    return ''
  }
})

onMounted(() => {
  if (!import.meta.env.SSR) {
    (window as any).innerHtml = innerHtml
  }
})
</script>

<template>
  <div>
    <div v-html="innerHtml" />

    <div class="hidden">
      <div ref="slotWrapper">
        <slot />
      </div>
    </div>
  </div>
</template>
