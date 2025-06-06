<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  path: string
  minHeight?: string
  previewClasses?: string
  prose?: boolean
}>()

const code = ref('')
const highlightedCode = ref('')

// Extract filename from path for display
const filename = computed(() => {
  return props.path.split('/').pop() || 'code.txt'
})

// Determine language from file extension
const language = computed(() => {
  const extension = props.path.split('.').pop() || 'text'
  const languageMap: Record<string, string> = {
    ts: 'typescript',
    js: 'javascript',
    vue: 'vue',
    svelte: 'svelte', // Add this line
    html: 'html',
    css: 'css',
    json: 'json',
    md: 'markdown',
    tsx: 'tsx',
    jsx: 'jsx'
  }
  return languageMap[extension] || 'text'
})

async function loadCodeAndComponent() {
  try {
    // Look in the app/.cache/examples directory
    const files = import.meta.glob(
      [
        '../code/examples/**/*.ts',
        '../code/examples/**/*.tsx',
        '../code/examples/**/*.js',
        '../code/examples/**/*.jsx',
        '../code/examples/**/*.vue',
        '../code/examples/**/*.svelte',
        '../code/examples/**/*.md'
      ],
      {
        as: 'raw',
        eager: false
      }
    )

    // Normalize the path by removing prefixes and cleaning up
    let normalizedPath = props.path
      .replace(/^@\/examples\//, '') // Remove @/examples/ prefix
      .replace(/^\.\.\/\.\.\/\.\.\/\.\.\/examples\//, '') // Remove ../../../../examples/ prefix
      .replace(/^examples\//, '') // Remove examples/ prefix if present
      .replace(/^\/*|\/*$/g, '') // Remove leading/trailing slashes

    // Try to find the file with the normalized path
    let fileKey = Object.keys(files).find((key) => key.includes(`/${normalizedPath}`))

    // If not found, try to find it by just the filename
    if (!fileKey) {
      const filename = normalizedPath.split('/').pop()
      fileKey = Object.keys(files).find((key) => key.endsWith(`/${filename}`))
    }

    if (!fileKey) {
      throw new Error(
        `File not found: ${normalizedPath}. Make sure the file exists in the examples directory and has been copied to the cache.`
      )
    }

    const loadRaw = files[fileKey]
    if (!loadRaw) {
      throw new Error(
        `File not found: ${normalizedPath}. Make sure the file exists in the examples directory and has been copied to the cache.`
      )
    }
    code.value = await loadRaw()

    highlightedCode.value = await codeToHtml(code.value, {
      lang: language.value,
      theme: 'github-dark'
    })
  } catch (error) {
    console.error(`Error loading file: ${props.path}`, error)
    code.value = `// Error loading file: ${props.path}\n// ${error instanceof Error ? error.message : String(error)}`
    highlightedCode.value = await codeToHtml(code.value, {
      lang: 'javascript',
      theme: 'github-dark'
    })
  }
}

onMounted(loadCodeAndComponent)

watch(
  () => props.path,
  () => {
    loadCodeAndComponent()
  }
)
</script>

<template>
  <ProsePre :code="code" :filename="filename" class="code-preview">
    <div v-html="highlightedCode" />
  </ProsePre>
</template>

<style>
.code-preview > div > pre {
  padding-left: 0;
}
.code-preview {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.code-preview pre code span.line:not(:last-of-type):empty {
  display: block;
  margin-bottom: 1.5rem;
}
pre.shiki {
  background-color: var(--tw-prose-pre-bg) !important;
  color: var(--tw-prose-pre-code) !important;
  font-size: 16px;
}
pre.shiki code {
  display: flex;
  flex-direction: column;
}
</style>
