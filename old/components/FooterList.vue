<script setup lang="ts">
interface FooterItem {
  title?: string
  label: string
  link: string
  target?: string
}

defineProps<{
  title: string
  items: FooterItem[]
}>()
</script>

<template>
  <ul class="text-lg">
    <li class="list-title font-bold text-2xl mb-1 sm:mb2">
      {{ title }}
    </li>
    <li v-for="item in items" :key="item.title">
      <a :href="item.link" :target="item.target">{{ item.label }}</a>
    </li>
  </ul>
</template>
