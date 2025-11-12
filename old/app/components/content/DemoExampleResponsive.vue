<script setup lang="ts">
import { computed, watch } from 'vue'

const props = defineProps({
  iframeClasses: {
    type: String,
    default: '',
  },
  allowProse: Boolean,
})
const { theme } = useTheme()

const iframe = ref()
const { pressed } = useMousePressed()
const { x: mouseX } = useMouse()
const { width } = useElementBounding(iframe)

const referenceX = ref(0)
const _width = ref('100%')

watch(pressed, (val) => {
  if (val)
    referenceX.value = mouseX.value
})
watch(mouseX, (val) => {
  if (pressed.value) {
    const delta = val - referenceX.value
    referenceX.value = mouseX.value
    _width.value = `${width.value + (delta * 1.2)}px`
  }
})

const classes = computed(() => {
  return `${props.iframeClasses} not-prose ${pressed ? 'pointer-events-none' : ''}`
})
</script>

<template>
  <div
    class="flex flex-row flex-wrap items-center mt-4 border-4 rounded-t-xl border-base-200 overflow-hidden"
    :class="classes"
  >
    <div class="flex flex-row w-full bg-black/50">
      <IframeRenderer
        ref="iframe"
        :style="{ width: _width }"
        class="w-full min-h-full"
        :classes="classes"
        :iframe-classes="iframeClasses"
        :theme="theme"
      >
        <slot />
      </IframeRenderer>
      <Tooltip draggable primary tip="Drag to Resize" left class="flex items-center justify-center bg-primary cursor-move">
        <Icon name="radix-icons:drag-handle-vertical" class="text-primary-content" />
      </Tooltip>
    </div>
  </div>
</template>
