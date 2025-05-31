<script setup lang="ts">
defineProps<{ value: string }>()
const pane = defineModel('currentPane')
</script>

<template>
  <Collapse 
    :value="value"
    :class="{
      'border border-transparent': pane !== value,
      'border border-primary': pane === value,
    }"
  >
    <CollapseTitle class="flex items-center justify-center">
      <slot name="title" />
    </CollapseTitle>
    <CollapseContent class="flex items-center justify-center">
      <slot name="content" />
    </CollapseContent>
  </Collapse>
</template>