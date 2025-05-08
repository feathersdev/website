<script lang="ts" setup>
const dropdownId = useId()
</script>

<template>
  <div class="fixed w-full top-0 z-50">
    <TopNav class="mx-auto max-w-[1512px] border-b border-b-base-100/20" />
  </div>
  <div class="relative mx-auto max-w-[1512px] bg-base-300">
    <div class="absolute inset-0 bg-[url('/img/home-bg.svg')] -top-16 opacity-50 bg-[length:12000px] bg-top z-0"></div>

    <Drawer v-slot="{ toggleDrawer }" name="docs" class="lg:drawer-open">
      <DrawerSide name="docs" class="z-40">
        <Sidebar @close="toggleDrawer()" />
      </DrawerSide>

      <DrawerContent name="docs">
        <Flex class="sticky top-0 h-16 p-2 md:px-4 z-10 w-full items-center">
          <div class="flex-grow">
            <Button square class="lg:hidden" @click="() => toggleDrawer()">
              <span class="sr-only">Open sidebar</span>
              <Icon name="heroicons-outline:menu-alt-2" aria-hidden="true" class="w-5 h-5" />
            </Button>

          <!-- <Search /> -->
          </div>

          <div class="flex items-center ml-2 md:ml-6">
            <!-- <ThemePicker /> -->

            <Dropdown strategy="fixed" placement="bottom-end" class="z-20 md:hidden" :random-id="dropdownId" close-on-click-outside>
              <DropdownButton square>
                <Icon name="heroicons-outline:menu-alt-3" class="w-5 h-5 pointer-events-none" aria-hidden="true" />
              </DropdownButton>
              <DropdownContent class="w-80 z-10 mt-1 max-h-[80vh] overflow-y-auto rounded-lg shadow-xl">
                <TableOfContents class="bg-base-200" />
              </DropdownContent>
            </Dropdown>
          </div>
        </Flex>

        <div class="grid grid-cols-4 pb-32">
          <div class="flex flex-col col-span-4 md:col-span-3 order-2 md:order-1">
            <slot />
          </div>
          <div id="right-sidebar" class="col-span-4 md:col-span-1 md:pr-6 order-1 md:order-2">
            <div class="hidden md:block md:sticky top-16">
              <TableOfContents class="overflow-hidden" />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>
