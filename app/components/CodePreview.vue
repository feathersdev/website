<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, onMounted, ref, resolveComponent, watch } from 'vue'

const props = defineProps<{
  path: string
  minHeight?: string
  previewClasses?: string
  prose?: boolean
}>()

const code = ref('')
const highlightedCode = ref('')
const copied = ref(false)

async function loadCodeAndComponent() {
  try {
    // Use dynamic import with ?raw suffix to get the raw content
    const module = await import(`${props.path}?raw`)
    code.value = module.default

    highlightedCode.value = await codeToHtml(code.value, {
      lang: 'vue',
      theme: 'github-dark',
    })
  } catch (error) {
    console.error(`Error loading file: ${props.path}`, error)
    code.value = `// Error loading file: ${props.path}`
    highlightedCode.value = await codeToHtml(code.value, {
      lang: 'javascript',
      theme: 'andromeeda',
    })
  }
}

async function copyCode() {
  await navigator.clipboard.writeText(code.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

onMounted(loadCodeAndComponent)

watch(() => props.path, () => {
  loadCodeAndComponent()
})
</script>

<template>
  <div class="code-preview relative">
    <Button xs neutral class="absolute top-2 right-4 cursor-pointer" @click="copyCode">
      {{ copied ? 'Copied!' : 'Copy' }}
    </Button>
    <div class="overflow-x-auto m-0 p-0" v-html="highlightedCode" />
  </div>
</template>

<style>
pre.shiki {
  /* Diagonal stripes, subtle effect */
  background-color: var(--tw-prose-pre-bg) !important;
  color: var(--tw-prose-pre-code) !important;
}
</style>