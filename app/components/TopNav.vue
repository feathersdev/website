<script setup lang="ts">
const { data: products } = await useAsyncData(() => queryCollection('products').where('published', '=', true).all())

const $route = useRoute()
const isProductsDropdownOpen = ref(false)
watch(
  () => $route.path,
  () => (isProductsDropdownOpen.value = false),
)

const dropdownId = useId()
</script>

<template>
  <Flex col class="relative">
    <Logo class="sm:hidden mt-3 max-w-8/12 pl-4" />
    <NuxtLink
      class="absolute top-5 right-2 btn btn-sm btn-primary sm:hidden"
      target="_blank"
      to="https://app.feathers.dev/"
    >
      Sign In
    </NuxtLink>

    <Navbar class="pt-0 sm:pt-3">
      <NavbarStart>
        <Logo class="hidden sm:block" />
      </NavbarStart>

      <NavbarCenter>
        <Flex row items-center class="gap-6 rounded-box bg-base-100/10 p-3 sm:px-12">
          <Dropdown hover v-model:open="isProductsDropdownOpen" placement="bottom" :random-id="dropdownId">
            <DropdownTarget class="flex justify-between cursor-pointer">
              Projects
              <Icon name="feather:chevron-down" class="text-xl ml-1" />
            </DropdownTarget>
            <DropdownContent class="z-40 bg-base-content text-base-100 rounded-box mt-4 p-3 w-96 max-w-screen">
              <div>
                <List>
                  <template v-for="product in products" :key="product.title">
                    <NuxtLink
                      v-if="product.highlight"
                      class="list-row hover:bg-base-300/10 items-center"
                      :to="product.link"
                    >
                      <Flex row items-center class="w-12 flex-shrink-0">
                        <Icon v-if="product.icon" :name="product.icon" size="40" />
                        <img v-else :src="product.meta.iconImage" class="size-9" />
                      </Flex>
                      <div>
                        <Text semibold lg>
                          {{ product.title }}
                        </Text>
                        <div class="text-sm leading-tight opacity-60">
                          {{ product.meta.menuDescription }}
                        </div>
                      </div>
                      <Icon name="feather:chevron-right" size="24" />
                    </NuxtLink>
                  </template>
                </List>
                <Flex row items-center class="sm:hidden gap-2 mt-4">
                  <NuxtLink to="/blog" class="btn btn-outline flex-1"> Blog </NuxtLink>
                  <NuxtLink to="/help" class="btn btn-outline flex-1"> Help </NuxtLink>
                </Flex>
              </div>
            </DropdownContent>
          </Dropdown>
          <NuxtLink to="/blog" class="hidden sm:block"> Blog </NuxtLink>
          <NuxtLink to="/help" class="hidden sm:block"> Help </NuxtLink>
        </Flex>
      </NavbarCenter>

      <NavbarEnd>
        <NuxtLink class="btn btn-primary hidden sm:flex" target="_blank" to="https://app.feathers.dev/">
          Sign In
        </NuxtLink>
      </NavbarEnd>
    </Navbar>
  </Flex>
</template>
