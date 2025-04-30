<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  type: { type: String, required: true },
})

const isVisible = ref(true)
</script>

<template>
  <div
    v-if="isVisible"
    class="flex flex-row gap-2 p-2 rounded-xl relative"
    :class="{
      'bg-info': type === 'info',
      'bg-success': type === 'success',
      'bg-warning': type === 'warning',
      'bg-error': type === 'error',
    }"
  >
    <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <svg v-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

    <div class="flex-grow text-left">
      <slot />
    </div>

    <button
      class="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-black/20 cursor-pointer"
      @click="isVisible = false"
    >
      ✕
    </button>
  </div>
</template>
