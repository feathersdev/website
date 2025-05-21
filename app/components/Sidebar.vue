<script setup>
const $emit = defineEmits(['close'])

const route = useRoute()
const productSlug = computed(() => route.path.split('/')[1])
const { data: docsSections } = await useAsyncData(
  () => productSlug.value,
  () => queryCollectionNavigation(productSlug.value, ['meta']),
)

// const drawerState = createDrawerState('docs')

// watch(() => route.path, () => {
//   drawerState.isDrawerOpen = false
// })
</script>

<template>
  <div class="relative pt-16 menu w-80 bg-base-200 text-base-content h-full">
    <div class="relative z-10">
      <Flex justify-end class="absolute right-2 lg:hidden">
        <Button square ghost @click="$emit('close')">
          <Icon name="feather:x" size="24" />
        </Button>
      </Flex>

      <Flex col class="pb-12 pl-2 mt-8 lg:mt-0 overflow-y-auto">
        <SidebarMenuSection
          v-for="link in docsSections"
          :key="link.id"
          :title="link.title"
          :links="link.children"
        />
      </Flex>
      <!-- <pre class="text-xs">{{ docsSections }}</pre> -->
    </div>
  </div>
</template>
