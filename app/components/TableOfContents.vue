<script setup lang="ts">
import TocTree from './TocTree.vue'

const pageRoute = useRoute()

// Interface for our TOC structure
interface TocLink {
  id: string
  text: string
  level: number
  children: TocLink[]
}

// Create a reactive reference for our TOC links
const tocLinks = ref<TocLink[]>([])
const pageTitle = ref('Table of Contents')

// Function to scan the page for headings and build the TOC
function scanHeadings() {
  // Wait for the DOM to be ready
  if (typeof document === 'undefined') {
    return
  }

  // Find all headings (h1-h6) with IDs
  const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
  const links: TocLink[] = []

  // Get the page title from the first h1
  const h1 = document.querySelector('h1')
  if (h1) {
    pageTitle.value = h1.textContent || 'Table of Contents'
  }

  // Process each heading
  headings.forEach((heading) => {
    // Skip the first h1 as it's the page title
    if (heading.tagName === 'H1' && heading === h1) {
      return
    }

    const id = heading.id
    const level = Number.parseInt(heading.tagName.substring(1), 10)

    // Create a TOC link
    const link: TocLink = { id, text: heading.textContent || '', level, children: [] }
    links.push(link)
  })

  // Build a robust hierarchical structure in a single pass
  const hierarchicalLinks: TocLink[] = []
  const parents: TocLink[] = []

  for (const link of links) {
    // Always ensure children is initialized
    if (!('children' in link) || !Array.isArray(link.children)) {
      (link as TocLink).children = []
    }
    // Find the last parent of lower level
    while (parents.length > 0 && parents[parents.length - 1]!.level >= link.level) {
      parents.pop()
    }
    if (parents.length === 0) {
      hierarchicalLinks.push(link)
    }
    else {
      parents[parents.length - 1]!.children.push(link)
    }
    parents.push(link)
  }
  tocLinks.value = hierarchicalLinks
}

// Check if we're in the browser
let observer: MutationObserver | null = null

onMounted(() => {
  // Initial scan
  scanHeadings()

  // Re-scan when route changes (for SPA navigation)
  watch(() => pageRoute.path, () => {
    nextTick(() => {
      scanHeadings()
    })
  })

  // Watch for DOM mutations affecting headings
  observer = new MutationObserver((mutations) => {
    let shouldRescan = false
    for (const mutation of mutations) {
      if (
        Array.from(mutation.addedNodes).some(isHeadingNode)
        || Array.from(mutation.removedNodes).some(isHeadingNode)
        || (mutation.type === 'attributes' && isHeadingNode(mutation.target))
      ) {
        shouldRescan = true
        break
      }
    }
    if (shouldRescan) {
      scanHeadings()
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['id'],
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

function isHeadingNode(node: Node | EventTarget): boolean {
  if (!(node instanceof HTMLElement)) {
    return false
  }
  return /^H[1-6]$/.test(node.tagName)
}

function checkActive(hash: string) {
  return pageRoute.hash === hash ? 'active' : null
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  setTimeout(() => {
    window.location.hash = ''
  }, 600)
}

function toBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}

function scrollToHeading(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update the hash after the scroll
    history.replaceState(null, '', `#${id}`)
  }
}
</script>

<template>
  <Flex col>
    <Menu v-if="tocLinks.length" class="md:menu-sm xl:menu-md w-full">
      <NuxtLink href="#" custom>
        <template #default="{ route }">
          <MenuItem class="text-base-content cursor-pointer">
            <a
              class="flex flex-row items-center justify-between font-semibold bg-neutral/30"
              :class="checkActive(route?.hash || '')" @click="toTop"
            >
              {{ pageTitle }}
              <Icon name="feather:arrow-up" class="text-base" />
            </a>
          </MenuItem>
        </template>
      </NuxtLink>

      <TocTree
        :links="tocLinks"
        :check-active="checkActive"
        :scroll-to-heading="scrollToHeading"
      />

      <MenuItem>
        <a class="flex flex-row items-center justify-between hover:bg-accent/25 mt-6" @click="toBottom">
          scroll to bottom
          <Icon name="feather:arrow-down" class="text-base" />
        </a>
      </MenuItem>
    </Menu>
  </Flex>
</template>
