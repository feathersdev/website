<script lang="ts" setup>

</script>

<template>
  <Drawer class="bg-base-100 text-base-content mx-auto max-w-[100rem] lg:drawer-open">
    <DrawerContent>
      <slot />
    </DrawerContent>
    <DrawerSide name="docs" class="z-50">
      Sidebar Goes Here
    </DrawerSide>
  </Drawer>
</template>
