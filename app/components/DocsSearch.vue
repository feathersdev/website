<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const route = useRoute()
const searchQuery = ref('')
const searchResults = ref([])
const isSearching = ref(false)
const showResults = ref(false)
const searchInput = ref<HTMLInputElement>()

// Determine which docs collection to search based on current route
const docsCollection = computed(() => {
  const productSlug = route.path.split('/')[1]
  if (productSlug === 'feathers') return 'feathersDocs'
  if (productSlug === 'pinion') return 'pinionDocs'
  if (productSlug === 'auth') return 'authDocs'
  if (productSlug === 'lofi') return 'lofiDocs'
  return 'feathersDocs' // default
})

const productName = computed(() => {
  const slug = route.path.split('/')[1]
  return slug.charAt(0).toUpperCase() + slug.slice(1)
})

// Debounced search function
const searchDocs = useDebounceFn(async () => {
  if (!searchQuery.value || searchQuery.value.length < 2) {
    searchResults.value = []
    showResults.value = false
    return
  }

  isSearching.value = true
  showResults.value = true

  try {
    const query = searchQuery.value.toLowerCase()

    // Get all docs for the current collection and filter client-side
    const allDocs = await queryCollection(docsCollection.value).all()

    // Search through title, description, path, and content
    const results = allDocs.filter((doc: any) => {
      const titleMatch = doc.title?.toLowerCase().includes(query)
      const descriptionMatch = doc.description?.toLowerCase().includes(query)
      const pathMatch = doc.path?.toLowerCase().includes(query)
      const stemMatch = doc.stem?.toLowerCase().includes(query)

      // Search through the actual document content
      let contentMatch = false
      if (doc.body) {
        // Convert body to string for searching (body might be structured)
        const bodyText = JSON.stringify(doc.body).toLowerCase()
        contentMatch = bodyText.includes(query)
      }

      return titleMatch || descriptionMatch || pathMatch || stemMatch || contentMatch
    })

    // Sort results by relevance (title matches first, then description, then content)
    const sortedResults = results.sort((a: any, b: any) => {
      const aTitle = a.title?.toLowerCase().includes(query) ? 3 : 0
      const aDescription = a.description?.toLowerCase().includes(query) ? 2 : 0
      const aPath = a.path?.toLowerCase().includes(query) ? 1 : 0
      const scoreA = aTitle + aDescription + aPath

      const bTitle = b.title?.toLowerCase().includes(query) ? 3 : 0
      const bDescription = b.description?.toLowerCase().includes(query) ? 2 : 0
      const bPath = b.path?.toLowerCase().includes(query) ? 1 : 0
      const scoreB = bTitle + bDescription + bPath

      return scoreB - scoreA
    })

    searchResults.value = sortedResults.slice(0, 10) // Limit to 10 results
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  } finally {
    isSearching.value = false
  }
}, 300)

// Watch for search query changes
watch(searchQuery, () => {
  searchDocs()
})

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showResults.value = false
    searchInput.value?.blur()
  }
}

// Close results when clicking outside
const handleClickOutside = () => {
  setTimeout(() => {
    showResults.value = false
  }, 200)
}

const navigateToResult = (path: string) => {
  showResults.value = false
  searchQuery.value = ''
  navigateTo(path)
}
</script>

<template>
  <div class="relative w-full max-w-md">
    <div class="relative">
      <Input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        placeholder="Search docs..."
        class="w-full pr-10"
        @keydown="handleKeydown"
        @focus="showResults = searchQuery.length >= 2"
        @blur="handleClickOutside"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon
          v-if="!isSearching"
          name="heroicons:magnifying-glass"
          class="w-5 h-5 text-base-content/50"
        />
        <span
          v-else
          class="loading loading-spinner loading-sm"
        />
      </div>
    </div>

    <!-- Search Results Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="showResults && searchQuery.length >= 2"
        class="absolute z-50 w-full mt-2 bg-base-100 rounded-lg shadow-xl border border-base-300 max-h-96 overflow-y-auto"
      >
        <div v-if="isSearching" class="p-4 text-center text-base-content/70">
          <span class="loading loading-spinner loading-md" />
        </div>

        <div v-else-if="searchResults.length === 0" class="p-4 text-center text-base-content/70">
          No results found for "{{ searchQuery }}" in {{ productName }} docs
        </div>

        <ul v-else class="py-2">
          <li
            v-for="result in searchResults"
            :key="result.path"
            class="hover:bg-base-200 transition-colors"
          >
            <a
              :href="result.path"
              class="block px-4 py-3 cursor-pointer"
              @click.prevent="navigateToResult(result.path)"
            >
              <div class="font-medium text-base-content">
                {{ result.title }}
              </div>
              <div v-if="result.description" class="text-sm text-base-content/70 mt-1 line-clamp-2">
                {{ result.description }}
              </div>
              <div class="text-xs text-base-content/50 mt-1">
                {{ result.path }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
