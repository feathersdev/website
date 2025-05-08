<template>
  <main class="bg-[url('/img/home-bg.svg')] bg-no-repeat bg-cover w-full h-full">
    <div class="text-base-content mx-auto max-w-[100rem] lg:drawer-open pt-6">
      <TopNav />
      <slot />
    </div>
  </main>
</template>
