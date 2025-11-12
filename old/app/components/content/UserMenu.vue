<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

const userNavigation = [
  { name: 'Your Profile', href: '/app/profile' },
  { name: 'Settings', href: '/app/settings' },
  { name: 'Home', href: '/' },
]

const user: any = useState('user')
</script>

<template>
  <Menu as="div" class="relative ml-3">
    <MenuButton
      class="flex items-center max-w-xs text-sm rounded-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span class="sr-only">Open user menu</span>
      <img class="w-8 h-8 rounded-full" :src="user?.picture">
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-for="item in userNavigation" :key="item.name">
          <NuxtLink
            :to="item.href"
            exact-active-class="bg-gray-100"
            :class="[
              'block px-4 py-2 text-sm text-gray-700',
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </MenuItem>

        <MenuItem>
          <a
            href="/api/auth/logout"
            exact-active-class="bg-gray-100"
            :class="[
              'block px-4 py-2 text-sm text-gray-700',
            ]"
          >Sign out</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
