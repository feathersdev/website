<script setup lang="ts">
interface Props {
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: Array<number>
  meta?: string | null
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
  class: ''
})

const copied = ref(false)

const copyToClipboard = async () => {
  if (!props.code) return
  
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <span class="relative group">
    <pre :class="$props.class"><slot /></pre>
    <button
      v-if="code"
      @click="copyToClipboard"
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-base-300 hover:bg-base-200 text-base-content p-2 rounded-md text-sm"
      :class="{ 'opacity-100': copied }"
      :title="copied ? 'Copied!' : 'Copy to clipboard'"
    >
      <Icon v-if="!copied" name="feather:copy" size="16" />
      <Icon v-else name="feather:check" size="16" />
    </button>
  </span>
</template>
