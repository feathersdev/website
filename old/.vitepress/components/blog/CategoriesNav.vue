<script setup lang="ts">
defineProps<{
  category?: string
}>()

const categories = [
  'All',
  'Auth',
  'Open Source',
  'DWeb',
]
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-4 gap-y-2">
    <a
      v-for="cat in categories"
      :key="cat"
      :href="`/blog/${cat === 'All' ? '' : cat.toLowerCase()?.replace(' ', '-')}`"
      :class="[cat.toLowerCase() === category?.toLowerCase() ? 'text-[color:var(--vp-c-brand-dark)]' : '']"
    >{{ cat }}</a>
  </div>
</template>
