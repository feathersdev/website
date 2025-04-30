<script setup lang="ts">
const products = [
  {
    icon: 'feathersdev:auth',
    name: 'Feathers Auth',
    description: 'Lorem Ipsum',
    to: '/auth',
  },
  {
    icon: 'feathersdev:feathers',
    name: 'Feathers JS',
    description: 'Lorem Ipsum',
    to: '/feathers',
  },
  {
    icon: 'feathersdev:pinion',
    name: 'Feathers Pinion',
    description: 'Lorem Ipsum',
    to: '/pinion',
  },
]

const $route = useRoute()
const isProductsDropdownOpen = ref(false)
watch(
  () => $route.path,
  () => (isProductsDropdownOpen.value = false),
)
</script>

<template>
  <Navbar>
    <NavbarStart>
      <NuxtLink to="/">
        <img src="/img/feathers-dev-white.svg" alt="Feathers.dev" class="h-12">
      </NuxtLink>
    </NavbarStart>

    <NavbarCenter>
      <Flex row items-center class="gap-6">
        <Dropdown v-model:open="isProductsDropdownOpen" placement="bottom">
          <DropdownTarget class="flex justify-between cursor-pointer">
            Products
            <Icon name="feather:chevron-down" class="text-xl ml-1" />
          </DropdownTarget>
          <DropdownContent class="z-10 bg-base-content text-base-100 rounded-box mt-4 p-3 w-96">
            <List>
              <NuxtLink
                v-for="product in products" :key="product.name"
                class="list-row hover:bg-base-300/10"
                :to="product.to"
              >
                <Flex row items-center class="w-12 flex-shrink-0">
                  <Icon :name="product.icon" size="40" />
                </Flex>
                <div>
                  <Text semibold lg>
                    {{ product.name }}
                  </Text>
                  <div class="text-xs uppercase font-semibold opacity-60">
                    {{ product.description }}
                  </div>
                </div>
                <Button square ghost>
                  <Icon name="feather:chevron-right" size="24" />
                </Button>
              </NuxtLink>
            </List>
          </DropdownContent>
        </Dropdown>
        <NuxtLink to="/blog">
          Blog
        </NuxtLink>
        <NuxtLink to="/help">
          Help
        </NuxtLink>
      </Flex>
    </NavbarCenter>

    <NavbarEnd>
      <Button>Sign In</Button>
    </NavbarEnd>
  </Navbar>
</template>
