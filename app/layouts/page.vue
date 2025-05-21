<template>
  <main class="relative w-full min-h-full bg-base-200">
    <div class="absolute w-full z-50">
      <TopNav class="max-w-[1396px] mx-auto" />
    </div>
    <div class="relative z-0">
      <NuxtPage />
    </div>
    <MoonSurface class="w-full" />
    <FooterMain />
  </main>
</template>
