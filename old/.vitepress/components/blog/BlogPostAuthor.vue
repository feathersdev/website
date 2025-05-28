<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { usePosts } from '../../composables/use-posts'
import { useAuthors } from '../../composables/use-authors'

defineProps<{
  insideDoc?: boolean
}>()

const { authors, findByName } = useAuthors()
const { post } = usePosts()

const author = computed(() => {
  return findByName(post.value.author)
})
</script>

<template>
  <dl>
    <dt class="sr-only">
      Authors
    </dt>
    <dd class="m-0">
      <ul
        class="flex space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
      >
        <li v-if="author" class="flex items-center space-x-2">
          <img
            v-if="author.gravatar"
            :src="`https://gravatar.com/avatar/${author.gravatar}`"
            alt="author image"
            class="h-10 w-10 rounded-full"
          >
          <img
            v-else-if="author.avatar"
            :src="author.avatar"
            alt="author image"
            class="h-10 w-10 rounded-full"
          >
          <dl class="whitespace-nowrap text-sm font-medium leading-5">
            <dt class="sr-only">
              Name
            </dt>
            <dd class="text-gray-900 dark:text-white ml-2">
              <a
                :href="withBase(author.url)"
                class="text-lg text-gray-900 hover:text-[color:var(--vp-c-brand-light)] dark:text-white dark:hover:text-[color:var(--vp-c-brand-dark)]"
              >
                {{ author.name }}
              </a>
            </dd>
            <dt v-if="author.twitter" class="sr-only">
              Twitter
            </dt>
            <dd v-if="author.twitter">
              <a
                :href="`https://twitter.com/${author.twitter}`"
                target="_blank"
                rel="noopener noreferrer"
              >@{{ author.twitter }}</a>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
