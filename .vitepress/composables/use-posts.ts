import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from './posts.data'

export function usePosts() {
  const route = useRoute()

  const path = route.path

  function findCurrentIndex() {
    const result = posts.findIndex(p => p.url === route.path)
    if (result === -1) {
      console.error(`blog post missing: ${route.path}`)
    }
    return result
  }

  const post = computed(() => posts[findCurrentIndex()])
  const newerPost = computed(() => posts[findCurrentIndex() - 1])
  const olderPost = computed(() => posts[findCurrentIndex() + 1])

  return { posts, post, newerPost, olderPost, path }
}
