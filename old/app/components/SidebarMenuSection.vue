<script setup lang="ts">
import type { MenuItem } from '../../content.config.schema'

defineProps<{
  section?: MenuItem
}>()
</script>

<template>
  <Menu class="w-full">
    <li v-if="!section?.noDivider" class="mx-0" />
    <MenuTitle v-if="section && !section.path" class="flex flex-row items-center gap-3">
      <Icon v-if="section.icon" :name="section.icon" :class="section.iconClasses" />
      {{ section.title }}
    </MenuTitle>

    <template v-for="link in section?.children" :key="link.title">
      <!-- Menu item with children - render submenu -->
      <MenuItem v-if="link.children">
        <MenuExpand :close-on-click-outside="false">
          <MenuExpandToggle class="flex flex-row items-center">
            <Icon v-if="link.icon" :name="link.icon" class="w-5 h-5 mr-1" />
            <Text class="flex-grow">
              {{ link.title }}
            </Text>
            <Badge v-if="link.meta?.new" sm accent class="ml-2">
              new
            </Badge>
          </MenuExpandToggle>
          <!-- Recursively render child menu -->
          <SidebarMenuSection 
            :children="link.children" 
            :no-divider="true"
          />
        </MenuExpand>
      </MenuItem>
      
      <!-- Regular menu item without children -->
      <MenuItem v-else>
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
  </Menu>
</template>
