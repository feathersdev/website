<script setup lang="ts">
import type { AuthDocsCollectionItem } from '@nuxt/content'

definePageMeta({
  layout: 'page',
})

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
    <div class="relative mx-auto max-w-[78rem] lg:drawer-open pt-16 px-4">
      <HeroProduct 
        :product="authProduct!"
        bird-classes="relative w-[160px] lg:w-[412px] lg:top-24 transition-all duration-500 ease-in-out floating"
        planet-classes="absolute w-[318px] lg:w-[599px] transition-all duration-500 ease-in-out -bottom-[calc(100%-8rem)] right-10 lg:top-0 lg:-right-108"
      />
    </div>
    <div class="h-64"></div>
  </div>
  <div class="bg-base-200 min-h-screen max-w-[78rem] mx-auto -mt-64 rounded-4xl p-6 pt-12 lg:p-12">
    <Titles
      title="A Quick Start Guide"
      description="Follow these three steps to integrate Cloud Auth into your applications."
      class="mb-24"
    />

    <Titles
      title="① Create Your Application"
      description="Use one of the below commands with our CLI tool to get signed up and create your first application."
      class="mb-24"
    />
    <AuthStepOne class="my-12">
      <template #cli>
        <CliBlock>
          <CliCommand>feathers example</CliCommand>
        </CliBlock>
      </template>
      <template #cli2>
        <CliBlock>
          <CliCommand>feathers integrate</CliCommand>
        </CliBlock>
      </template>
    </AuthStepOne>

    <Titles
      title="② Customize your theme"
      class="mt-36 mb-6"
    >
      <template #description>
        <Text>
          <a href="" class="text-primary">Sign in to the dashboard</a> and customize your theme to match your brand.
        </Text>
      </template>
    </Titles>
    <Flex row items-center class="mb-12 gap-6">
      <img
        src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/30aef796-4df0-421c-a129-053a06d6f400/publichd"
        alt="Customize your Login page theme"
        class="rounded-xl border-12 border-solid border-white/10 shadow-xl mt-8"
      />
    </Flex>

    <Titles
      title="③ Keep track of user activity."
      description="Use the dashboard to keep track of your users and their activity."
      class="mt-36 mb-6"
    />
    <Flex row items-center class="mb-12 gap-6">
      <img src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/71ddf09c-4fad-4f64-edb4-1de12e610c00/publichd"
        alt="Feathers Dashboard" class="rounded-xl border-12 border-solid border-white/10 shadow-xl mt-8">
    </Flex>

    <Titles
      title="Flexible Pricing"
      class="my-24"
    >
      <template #description>
        <Flex col items-center>
          <Text is="div"> Get started for free. </Text>
          <Text is="div"> Pay only for what you use. </Text>
        </Flex>
      </template>
    </Titles>

    <Pricing />

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
