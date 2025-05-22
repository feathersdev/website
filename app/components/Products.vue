<script setup lang="ts">
import type { Product } from '~~/content.config';

defineProps<{
  superTitle?: string,
  title: string,
  subTitle?: string,
  description?: string,
  products: Product[]
}>()
</script>

<template>
  <div>
    <Titles 
      :superTitle="superTitle"
      :title="title"
      :subTitle="subTitle"
      :description="description"
    />
    <Flex class="mt-8 flex-wrap">
      <ProductCard 
        v-for="product in products" 
        :key="product.slug"
        :product="product"
        class="w-full md:w-1/2 lg:w-1/3"
      />
    </Flex>
  </div>
</template>