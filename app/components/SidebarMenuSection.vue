<script setup lang="ts">
interface SidebarLink {
  title: string;
  path: string;
  stem: string;
  meta: Record<string, any>;
  children?: SidebarLink[];
  page?: boolean;
  icon?: string; // Optional, for template compatibility
}
defineProps<{
  title?: string
  titleIcon?: string
  titleIconClasses?: string
  links: SidebarLink[]
  noDivider?: boolean
}>()
</script>

<template>
  <Menu class="w-full">
    <li v-if="!noDivider" />
    <MenuTitle v-if="titleIcon || title" class="flex flex-row items-center gap-3">
      <Icon v-if="titleIcon" :name="titleIcon as string" :class="titleIconClasses as string" />
      {{ title }}
    </MenuTitle>

    <MenuItem
      v-for="link in links"
      :key="link.title"
    >
      <NuxtLink :to="link.path" exact-active-class="menu-active" class="flex flex-row items-center ">
        <Icon v-if="link.icon" :name="link.icon" class="w-5 h-5 mr-1" />
        <Text class="flex-grow">
          {{ link.title }}
        </Text>
        <Badge v-if="link.meta?.new" sm soft accent class="ml-2">
          new
        </Badge>
      </NuxtLink>
    </MenuItem>
  </Menu>
</template>
