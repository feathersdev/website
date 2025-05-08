<script setup lang="ts">
const props = defineProps<{
  values: string
}>()
const links = computed(() => {
  const values = props.values.split(',').map(name => name.trim())
  return values.map((value) => {
    if (value.includes('#')) {
      const [name, url] = value.split('#')
      return {
        name,
        url: `#${url}`,
      }
    }
    else {
      return {
        name: value,
        url: `#${value.toLowerCase()}`,
      }
    }
  })
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <a :href="link.url" class="link link-primary">{{ link.name }}</a>
    </li>
  </ul>
</template>
