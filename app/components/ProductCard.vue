<script setup lang="ts">
import type { Product } from '../../content.config'
defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="p-4">
    <Card class="h-full items-start bg-primary-content text-base-100 p-2">
      <CardBody class="gap-6">
        <figure class="flex flex-col !items-start !justify-start invert">
          <img :src="product.logo" :alt="product.title" class="max-w-2/3 h-full w-full object-contain">
        </figure>

        <p>{{ product.longDescription }}</p>

        <CardActions>
          <NuxtLink :to="product.link" neutral class="btn btn-neutral">
            Learn {{ product.shortName }} 
          </NuxtLink>
        </CardActions>
      </CardBody>
    </Card>
  </div>
</template>