<script lang="ts" setup>
const dropdownId = useId()
</script>

<template>
  <div class="bg-base-200">
    <div class="relative mx-auto max-w-[82rem]">
      <TopNav class="mx-auto max-w-[82rem] border-b border-b-base-100/20" />

      <Drawer v-slot="{ toggleDrawer }" name="docs" class="lg:drawer-open">
        <DrawerSide name="docs" class="z-40">
          <DocsSidebar @close="toggleDrawer()" />
        </DrawerSide>

        <DrawerContent name="docs">
          <Flex class="sticky top-0 h-16 p-2 md:px-4 z-10 w-full items-center lg:hidden">
            <div class="flex-grow flex items-center gap-2">
              <Button square class="lg:hidden" @click="() => toggleDrawer()">
                <span class="sr-only">Open sidebar</span>
                <Icon name="heroicons-outline:menu-alt-2" aria-hidden="true" class="w-5 h-5" />
              </Button>

              <DocsSearch class="flex-grow" />
            </div>

            <div class="flex items-center ml-2 md:ml-6">
              <!-- <ThemePicker /> -->

              <Dropdown strategy="fixed" placement="bottom-end" class="z-20 md:hidden" :random-id="dropdownId" close-on-click-outside>
                <DropdownButton square>
                  <Icon name="heroicons-outline:menu-alt-3" class="w-5 h-5 pointer-events-none" aria-hidden="true" />
                </DropdownButton>
                <DropdownContent class="w-80 z-10 mt-1 max-h-[80vh] overflow-y-auto rounded-lg shadow-xl">
                  <TableOfContents class="bg-base-300" />
                </DropdownContent>
              </Dropdown>
            </div>
          </Flex>

          <div class="grid grid-cols-4 pb-32">
            <div class="flex flex-col col-span-4 md:col-span-3 overflow-hidden">
              <slot />
            </div>
            <div id="right-sidebar" class="col-span-1 md:pr-6">
              <div class="hidden md:block md:sticky top-16">
                <TableOfContents class="overflow-hidden" />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  </div>
  <div class="mx-auto max-w-[1512px] bg-base-200 rounded-b-xl h-12" />
  <MoonSurface class="mt-24" />
  <FooterMain />
</template>
