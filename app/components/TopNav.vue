<script setup lang="ts">
const { data: products } = await useAsyncData(() => queryCollection('products').where('published', '=', true).all())

const $route = useRoute()
const isProductsDropdownOpen = ref(false)
watch(
  () => $route.path,
  () => (isProductsDropdownOpen.value = false),
)
</script>

<template>
  <Navbar class="pt-3">
    <NavbarStart>
      <Logo />
    </NavbarStart>

    <NavbarCenter>
      <Flex row items-center class="gap-6 rounded-box bg-base-100/10 p-3 px-12">
        <Dropdown hover v-model:open="isProductsDropdownOpen" placement="bottom">
          <DropdownTarget class="flex justify-between cursor-pointer">
            Products
            <Icon name="feather:chevron-down" class="text-xl ml-1" />
          </DropdownTarget>
          <DropdownContent class="z-10 bg-base-content text-base-100 rounded-box mt-4 p-3 w-96">
            <List>
              <NuxtLink
                v-for="product in products" :key="product.title"
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
