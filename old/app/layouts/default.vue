<template>
  <Drawer v-slot="{ openDrawer }" name="docs" class="lg:drawer-open">
    <!-- Static sidebar for desktop -->
    <Sidebar />

    <DrawerContent name="docs">
      <Flex class="sticky top-0 h-16 p-2 md:px-4 z-10 w-full items-center">
        <div class="flex-grow">
          <Button square class="lg:hidden" @click="() => openDrawer()">
            <span class="sr-only">Open sidebar</span>
            <Icon name="heroicons-outline:menu-alt-2" aria-hidden="true" class="w-5 h-5" />
          </Button>

          <Search />
        </div>

        <div class="flex items-center ml-2 md:ml-6">
          <ThemePicker />
        </div>
      </Flex>

      <div class="grid grid-cols-4 pb-32">
        <div class="flex flex-col col-span-4 md:col-span-3 order-2 md:order-1">
          <Prose class="px-3 lg:px-6 pt-6">
            <slot />
          </Prose>
        </div>
        <div id="sidebar" class="col-span-4 md:col-span-1 md:pr-6 order-1 md:order-2">
          <div class="hidden md:block md:sticky top-16">
            <TableOfContents class="overflow-hidden" />
          </div>

          <Dropdown end class="z-20 md:hidden fixed right-2" close-on-click-outside>
            <DropdownButton square>
              <!-- Table of contents icon -->
              <Icon name="heroicons-outline:menu-alt-3" class="w-5 h-5 pointer-events-none" aria-hidden="true" />
            </DropdownButton>
            <DropdownContent class="w-80 z-10 mt-1 max-h-[80vh] overflow-y-auto rounded-lg shadow-xl">
              <TableOfContents class="bg-base-200" />
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>
