<template>
  <main class="relative w-full min-h-full bg-base-200">
    <div class="absolute w-full z-50">
      <TopNav class="max-w-[1396px] mx-auto" />
    </div>
    <div class="relative z-0">
      <NuxtPage />
    </div>
    <MoonSurface class="w-full">
      <Flex col items-center class="my-16 md:my-10 lg:my-24 xl:my-32">
        <NewsletterSubscribe class="w-full md:max-w-[600px]"/>
      </Flex>
    </MoonSurface>
    <FooterMain />
  </main>
</template>
