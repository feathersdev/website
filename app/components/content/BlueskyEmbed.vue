<script setup lang="ts">
interface Props {
  uri: string
  cid: string
}

const props = defineProps<Props>()
const embedContainer = ref<HTMLElement | null>(null)

// Extract the post URL from the AT URI
// Format: at://did:plc:xxx/app.bsky.feed.post/postId
const getPostUrl = () => {
  const parts = props.uri.split('/')
  const did = parts[2]
  const postId = parts[parts.length - 1]
  return `https://bsky.app/profile/${did}/post/${postId}`
}

const postUrl = getPostUrl()

onMounted(() => {
  // Load the Bluesky embed script
  const scriptId = 'bluesky-embed-script'

  const initializeEmbed = () => {
    // Wait a bit longer and check multiple times
    let attempts = 0
    const maxAttempts = 10

    const checkAndScan = () => {
      attempts++

      if ((window as any).bluesky?.scan) {
        console.log('Bluesky scan function found, triggering...')
        ;(window as any).bluesky.scan()
      } else if (attempts < maxAttempts) {
        console.log(`Waiting for Bluesky script... attempt ${attempts}`)
        setTimeout(checkAndScan, 200)
      } else {
        console.error('Bluesky embed script did not load properly')
      }
    }

    setTimeout(checkAndScan, 100)
  }

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://embed.bsky.app/static/embed.js'
    script.async = true
    script.charset = 'utf-8'

    script.onload = () => {
      console.log('Bluesky embed script loaded')
      initializeEmbed()
    }

    script.onerror = () => {
      console.error('Failed to load Bluesky embed script')
    }

    document.head.appendChild(script)
  } else {
    initializeEmbed()
  }
})
</script>

<template>
  <ClientOnly>
    <div class="bluesky-embed-wrapper my-6 rounded-lg" ref="embedContainer">
      <blockquote
        class="bluesky-embed"
        :data-bluesky-uri="uri"
        :data-bluesky-cid="cid"
        data-bluesky-embed-color-mode="dark"
      >
        <p lang="en">
          Loading Bluesky post...
          <a :href="postUrl" target="_blank" rel="noopener noreferrer">View on Bluesky</a>
        </p>
      </blockquote>
    </div>
  </ClientOnly>
</template>

<style scoped>
.bluesky-embed-wrapper :deep(iframe) {
  border-radius: 0.7rem !important;
}
</style>
