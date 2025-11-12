<script setup lang="ts">
import type { PropType } from 'vue'

interface TocLink {
  id: string
  text: string
  level: number
  children: TocLink[]
}

defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    required: true
  },
  checkActive: {
    type: Function as PropType<(hash: string) => string | null>,
    required: true
  },
  scrollToHeading: {
    type: Function as PropType<(id: string) => void>,
    required: true
  }
})
</script>

<template>
  <Menu v-if="links && links.length" class="w-full">
    <MenuItem v-for="link in links" :key="link.id">
      <NuxtLink :href="`#${link.id}`" custom>
        <template #default="{ route }">
          <a
            class="block px-2 py-1 text-base-content hover:bg-accent/10 rounded cursor-pointer"
            :class="checkActive(route?.hash || '')"
            @click.prevent="scrollToHeading(link.id)"
          >
            {{ link.text }}
          </a>
        </template>
      </NuxtLink>
      <TocTree
        v-if="link.children && link.children.length"
        :links="link.children"
        :check-active="checkActive"
        :scroll-to-heading="scrollToHeading"
      />
    </MenuItem>
  </Menu>
</template>
