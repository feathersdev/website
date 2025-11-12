<script setup lang="ts">
const { data: products } = await useAsyncData(() => queryCollection('products').where('published', '=', true).all())
</script>

<template>
  <div class="bg-[#251938]">
    <div class="flex items-center justify-center py-8">
      <Logo />
    </div>
    <Footer class="sm:footer-horizontal text-neutral-content max-w-[87rem] mx-auto p-10 justify-evenly text-lg -ml-5.5 sm:ml-0">
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">Products</FooterTitle>
        <NuxtLink v-for="product in products" :key="product.slug" class="link link-hover" :to="product.slug">
          {{ product.title }}
        </NuxtLink>
      </nav>
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">Learn</FooterTitle>
        <NuxtLink class="link link-hover" to="/blog">
          Blog
        </NuxtLink>
        <NuxtLink class="link link-hover" to="/help">
          Help
        </NuxtLink>
        <NuxtLink class="link link-hover" to="https://github.com/feathersdev">
          Github
        </NuxtLink>
      </nav>
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">About</FooterTitle>
        <NuxtLink class="link link-hover" to="/tos">
          Terms of Service
        </NuxtLink>
        <NuxtLink class="link link-hover" to="/privacy">
          Privacy Policy
        </NuxtLink>
      </nav>
    </Footer>

    <div class="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 h-1 max-w-[87rem] mx-auto" />
    <div class="flex items-center justify-center py-3">
      <p class="text-center text-sm text-neutral-content/30">
        Copyright © 2012 - {{ new Date().getFullYear() }} feathers.dev
      </p>
    </div>
  </div>
</template>