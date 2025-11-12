<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const { copy, copied } = useClipboard({ source: computed(() => props.code) })
</script>

<template>
  <div>
    <CodeWrapper v-if="meta?.includes('collapse=true')" class="code-wrapper">
      <div class="relative -my-6">
        <div class="absolute flex flex-row items-center top-0 right-0">
          <div v-if="copied" class="pr-2 text-sm text-neutral-content">
            copied
          </div>
          <Button
            ghost sm
            class="text-neutral-content hover:bg-secondary hover:text-secondary-content rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md"
            @click="() => copy(code)"
          >
            copy
          </Button>
        </div>
        <div class="lg:max-w-[calc(100vw-380px)]">
          <slot />
        </div>
      </div>
    </CodeWrapper>
    <slot v-else />
  </div>
</template>

<style>
.code-wrapper pre code .line {
  display: block;
  min-height: 1rem;
}

.code-wrapper pre {
  max-width: calc(100vw - 3.5rem);
}
</style>
