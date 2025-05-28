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

// Extract filename from path for display
const filename = computed(() => {
  return props.path.split('/').pop() || 'code.txt'
})

// Determine language from file extension
const language = computed(() => {
  const extension = props.path.split('.').pop() || 'text'
  const languageMap: Record<string, string> = {
    'ts': 'typescript',
    'js': 'javascript',
    'vue': 'vue',
    'html': 'html',
    'css': 'css',
    'json': 'json',
    'md': 'markdown',
    'tsx': 'tsx',
    'jsx': 'jsx'
  }
  return languageMap[extension] || 'text'
})

async function loadCodeAndComponent() {
  try {
    // Get all example files using a glob pattern that includes all possible example directories
    const files = import.meta.glob('../../examples/**/*', { as: 'raw', eager: false })

    console.log('files', files)
    
    // Normalize the path by removing @/ if present and any leading/trailing slashes
    let normalizedPath = props.path
      .replace(/^@\//, '')
      .replace(/^\/+|\/+$/g, '')
    
    console.log('Looking for file:', normalizedPath)
    
    // Try to find the file with the exact path first
    let fileKey = Object.keys(files).find(key => 
      key.endsWith(`/${normalizedPath}`)
    )
    
    // If not found, try to find it by just the filename
    if (!fileKey) {
      const filename = normalizedPath.split('/').pop()
      fileKey = Object.keys(files).find(key => key.endsWith(`/${filename}`))
    }
    
    console.log('Found file at:', fileKey)
    
    if (!fileKey) {
      throw new Error(`File not found: ${normalizedPath}. Available files: ${Object.keys(files).slice(0, 10).join(', ')}...`)
    }

    const loadRaw = files[fileKey]
    if (!loadRaw) {
      throw new Error(`Failed to load file: ${fileKey}`)
    }
    code.value = await loadRaw()
    
    highlightedCode.value = await codeToHtml(code.value, {
      lang: language.value,
      theme: 'github-dark',
    })
  } catch (error) {
    console.error(`Error loading file: ${props.path}`, error)
    code.value = `// Error loading file: ${props.path}\n// ${error instanceof Error ? error.message : String(error)}`
    highlightedCode.value = await codeToHtml(code.value, {
      lang: 'javascript',
      theme: 'github-dark',
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
  <div class="code-preview my-6">
    <div class="relative">
      <Badge sm neutral class="absolute top-2 left-2 font-mono text-base-content/50">
        {{ filename }}
      </Badge>
      <Button xs neutral class="absolute top-2 right-4 cursor-pointer" @click="copyCode">
        {{ copied ? 'Copied!' : 'Copy' }}
      </Button>
      <pre class="overflow-x-auto rounded-lg p-4" v-html="highlightedCode" />
    </div>
  </div>
</template>

<style>
pre.shiki {
  /* Diagonal stripes, subtle effect */
  background-color: var(--tw-prose-pre-bg) !important;
  color: var(--tw-prose-pre-code) !important;
}
pre.shiki code {
  display: flex;
  flex-direction: column;
}
</style>