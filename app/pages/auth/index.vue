<script setup lang="ts">
import type { AuthDocsCollectionItem } from '@nuxt/content'

definePageMeta({
  layout: 'page',
})

const frontends = [
  {
    name: 'React',
    icon: 'logos:react',
    link: 'https://reactjs.org/'
  },
  {
    name: 'Vue',
    icon: 'logos:vue',
    link: 'https://vuejs.org/'
  },
  {
    name: 'Svelte',
    icon: 'logos:svelte-icon',
    link: 'https://svelte.dev/'
  },
  {
    name: 'Angular',
    icon: 'logos:angular-icon',
    link: 'https://angular.io/'
  },
  {
    name: 'Any HTML or JS',
    icon: 'logos:html-5',
    link: 'https://html.com/'
  }
]
const platforms = [
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    link: 'https://nodejs.org/'
  },
  {
    name: 'Deno',
    icon: 'logos:deno',
    link: 'https://deno.com/'
  },
  {
    name: 'Bun',
    icon: 'logos:bun',
    link: 'https://bun.sh/'
  },
  {
    name: 'Cloudflare Workers',
    icon: 'logos:cloudflare-workers-icon',
    link: 'https://workers.cloudflare.com/'
  }
]

const { data: authProduct } = await useAsyncData(() => queryCollection('products').where('slug', '=', 'auth').first())

// Docs pages in order of the `visiblePageTitles` array
const { data: authDocs } = await useAsyncData(() => queryCollection('authDocs').order('id', 'ASC').all())
const visiblePageTitles = [
  'Overview',
  'Guides',
  'Server',
  'API',
]
const visiblePages = computed(() => 
  visiblePageTitles.map(title => authDocs.value?.find(page => page.title === title))
    .filter((page): page is AuthDocsCollectionItem => !!page)
)

useSeoMeta({
  title: 'feathers.dev',
  description: 'Identity. Data. Realtime.',
})
</script>

<template>
  <div class="bg-[url('/img/top_background.svg')] bg-no-repeat bg-cover bg-center text-base-content max-w-screen overflow-x-hidden">
    <div class="relative mx-auto max-w-[82rem] lg:drawer-open md:pt-16 px-4">
      <HeroProduct 
        v-if="authProduct"
        :product="authProduct"
        bird-classes="relative w-[230px] sm:w-[260px] lg:w-[412px] lg:top-24 transition-all duration-500 ease-in-out floating"
        planet-classes="absolute w-[318px] lg:w-[550px] transition-all duration-500 ease-in-out -bottom-[calc(100%-18rem)] -right-50 sm:-right-40 md:-right-30 lg:top-0 lg:-right-108 planet-wobble"
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[82rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <Titles
      title="A Quick Start Guide"
      description="Follow these three steps to integrate Cloud Auth into your applications."
      class="mb-24"
    />

    <Titles
      title="① Create Your Application"
      description="Sign in and use the dashboard to create your first organization and application."
    />
    <Flex row items-center justify-center class="mt-8 mb-24">
      <NuxtLink 
        to="https://app.feathers.dev/" 
        target="_blank" 
        class="btn btn-xl btn-primary"
      >
        Get started for free
      </NuxtLink>
    </Flex>

    <Titles
      title="② Customize your theme"
      description="Use the theme settings to customize your login page to match your brand."
      class="mt-36 mb-6"
    />
    <Flex col items-center justify-center class="mb-12 gap-6 lg:flex-row">
      <img
        src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/6db9ed55-a009-428b-aa38-8bf7697bac00/public"
        alt="A login page"
        class="w-110"
      />
      <img
        src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/1a3bae7c-1a14-4f62-575f-de527fad4e00/public"
        alt="The theme editor"
        class="w-72 rounded-xl"
      />
    </Flex>

    <Titles
      title="③ Integrate into your app"
      description="On your app's overview page, click the link to integrate with your favorite framework or platform."
      class="mt-36 mb-6"
    />
    <Flex row items-center justify-center class="mx-auto gap-2 mb-2 text-balance flex-wrap">
      <Tooltip v-for="logo in frontends" :key="logo.name" 
        :tip="logo.name"
        class="p-2 text-6xl flex items-center justify-center rounded-full">
        <Icon :name="logo.icon" />
      </Tooltip>
    </Flex>
    <Flex items-center justify-center row class="mx-auto gap-2 text-balance flex-wrap">
      <Tooltip bottom v-for="logo in platforms" :key="logo.name" 
        :tip="logo.name"
        class="p-2 text-6xl flex items-center justify-center rounded-full">
        <Icon :name="logo.icon" />
      </Tooltip>
    </Flex>
    <Flex class="opacity-70">
      <Text center class="text-balance w-full mt-6">You don't need a backend to start building your apps with us. </Text>
    </Flex>
    
    <Titles
      title="④ Keep track of user activity"
      description="Use the dashboard to keep track of your users and their activity."
      class="mt-36 mb-6"
    />
    <Flex row items-center class="mb-12 gap-6 lg:mx-24">
      <img src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/6e3999af-7414-4352-4453-5bd8f5d78100/public"
        alt="Feathers Dashboard" class="rounded-xl border-12 border-solid border-white/10 shadow-xl mt-8">
    </Flex>

    <Titles
      title="Choose a Plan"
      class="my-24"
    >
      <template #description>
        <Flex col items-center>
          <Text is="div"> Get started for free. </Text>
          <Text is="div" class="opacity-60"> No hidden costs. </Text>
        </Flex>
      </template>
    </Titles>

    <Flex class="xl:mx-24 mx-auto">
      <PricingGrid />
    </Flex>

    <Titles
      title="Feathers Auth Explained"
      class="mt-36 mb-6"
    />
    <DocsTiles 
      :pages="visiblePages!"
      class="mb-24"
    />

    <Discord />
  </div>
</template>
