<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { computed, onMounted, ref, resolveComponent, watch } from 'vue'

const props = defineProps<{
  slug: string
  name: string
  minHeight?: string
  previewClasses?: string
  prose?: boolean
}>()

const code = ref('')
const highlightedCode = ref('')
const copied = ref(false)

function pascalCase(str: string): string {
  return str
    .replace(/(^|[-_/])(\w)/g, (_: string, __: string, c: string) => c ? c.toUpperCase() : '')
}

const componentName = computed(() => {
  // e.g., DemoSwapFlip for slug="swap", name="Flip"
  return `Demo${pascalCase(props.slug)}${pascalCase(props.name)}`
})

const resolvedComponent = computed(() => {
  return resolveComponent(componentName.value)
})

const filename = computed(() => `${props.name}.vue`)

async function loadCodeAndComponent() {
  const files = import.meta.glob('~/components-docs/demo/**/*.vue', { as: 'raw' })
  const key = `/components-docs/demo/${props.slug}/${props.name}.vue`

  const loadRaw = files[key]
  if (!loadRaw) {
    console.error(`Missing file: ${key}`)
    return
  }

  code.value = await loadRaw()

  highlightedCode.value = await codeToHtml(code.value, {
    lang: 'vue',
    theme: 'github-dark',
  })
}

async function copyCode() {
  await navigator.clipboard.writeText(code.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

onMounted(loadCodeAndComponent)

watch([() => props.slug, () => props.name], () => {
  loadCodeAndComponent()
})
</script>

<template>
  <div class="code-preview my-6">
    <div
      :style="minHeight ? { minHeight } : undefined"
      class="flex overflow-x-auto p-6 lg:p-10 flex-nowrap items-start mt-4 border-4 rounded-t-xl border-base-300 gap-2 code-preview-bg"
      :class="[previewClasses, prose ? 'prose' : 'not-prose']"
    >
      <component :is="resolvedComponent" />
    </div>

    <Collapse arrow toggle class="mb-8 rounded-b-xl rounded-t-none bg-base-300 p-0">
      <CollapseTitle class="text-lg font-medium bg-base-300">
        Code Example
      </CollapseTitle>
      <CollapseContent class="overflow-hidden !pb-0 -mt-4">
        <div class="relative">
          <Badge sm neutral class="absolute top-2.5 left-2 font-mono text-base-content/50">
            {{ filename }}
          </Badge>
          <Button xs neutral class="copy-button" @click="copyCode">
            {{ copied ? 'Copied!' : 'Copy' }}
          </Button>
          <pre class="overflow-x-auto rounded-lg p-4" v-html="highlightedCode" />
        </div>
      </CollapseContent>
    </Collapse>
  </div>
</template>

<style scoped>
.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 0.75rem;
  color: white;
  cursor: pointer;
}

.code-preview-bg {
  /* Diagonal stripes, subtle effect */
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(0,0,0,0.06) 0,
    rgba(0,0,0,0.06) 8px,
    transparent 8px,
    transparent 16px
  );
}
</style>

<style>
.shiki code {
  @apply flex flex-col;
}
</style>
