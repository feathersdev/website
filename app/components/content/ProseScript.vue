<script setup lang="ts">
interface Props {
  src?: string
  async?: boolean
  defer?: boolean
  type?: string
}

const props = defineProps<Props>()

// Only allow specific whitelisted scripts for security
const allowedScripts = [
  'https://embed.bsky.app/static/embed.js'
]

const isAllowed = props.src && allowedScripts.includes(props.src)

if (isAllowed && props.src) {
  useHead({
    script: [
      {
        src: props.src,
        async: props.async ?? true,
        defer: props.defer,
        type: props.type || 'text/javascript',
      }
    ]
  })
}
</script>

<template>
  <!-- Empty template - script is loaded via useHead -->
  <div v-if="!isAllowed && src" class="border border-yellow-200 rounded-lg p-4 bg-yellow-50 text-yellow-800">
    <p class="text-sm">Script from "{{ src }}" is not in the allowlist and cannot be loaded.</p>
  </div>
</template>
