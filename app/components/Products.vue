<script setup lang="ts">
import type { Product } from '~~/content.config.schema'

defineProps<{
  superTitle?: string
  title: string
  subTitle?: string
  description?: string
  products: Product[]
}>()
</script>

<template>
  <div>
    <Titles :superTitle="superTitle" :title="title" :subTitle="subTitle" :description="description" />
    <Flex class="mt-8 flex-wrap px-2 lg:px-0">
      <template v-for="product in products" :key="product.title">
        <ProductCard
          v-if="product.highlight"
          :key="product.slug"
          :product="product"
          class="w-full md:w-1/2 lg:w-1/2 p-2 lg:p-4"
        />
      </template>
    </Flex>
  </div>
</template>
