<script setup>
const $emit = defineEmits(['close'])

const route = useRoute()
const docsMenuStem = computed(() => {
  const productSlug = route.path.split('/')[1]
  return `menus/docs-${productSlug}`
})
const { data } = await useAsyncData(
  () => docsMenuStem.value,
  () => queryCollection('menus').where('stem', '==', docsMenuStem.value).first(),
)

// const drawerState = createDrawerState('docs')

// watch(() => route.path, () => {
//   drawerState.isDrawerOpen = false
// })
</script>

<template>
  <div class="relative menu w-60 bg-base-200 text-base-content h-full overflow-y-auto">
    <div class="relative z-10">
      <Flex justify-end class="absolute right-2 lg:hidden z-20 top-4">
        <Button square ghost @click="$emit('close')">
          <Icon name="feather:x" size="24" />
        </Button>
      </Flex>

      <Flex col class="pb-12 pl-2">
        <div class="px-2 pb-4 pt-2">
          <DocsSearch />
        </div>

        <template v-for="link in data.items" :key="link.path">
          <template v-if="link.children">
            <SidebarMenuSection :section="link" />
          </template>
          <template v-else>
            <MenuItem class="ml-2">
              <NuxtLink :to="link.path" exact-active-class="menu-active" class="flex flex-row items-center">
                <Icon v-if="link.icon" :name="link.icon" class="w-5 h-5 mr-1" />
                <Text class="flex-grow">
                  {{ link.title }}
                </Text>
                <Badge v-if="link.meta?.new" sm accent class="ml-2">
                  new
                </Badge>
              </NuxtLink>
            </MenuItem>
          </template>
        </template>
      </Flex>
      <!-- <pre class="text-xs">{{ data }}</pre> -->
    </div>
  </div>
</template>
