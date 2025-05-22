<template>
  <div class="bg-[#251938] pb-32">
    <div class="flex items-center justify-center py-8">
      <Logo />
    </div>
    <Footer class="sm:footer-horizontal text-neutral-content max-w-[87rem] mx-auto p-10 justify-evenly text-lg">
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">Products</FooterTitle>
        <DaisyLink hover>
          Feathers Framework
        </DaisyLink>
        <DaisyLink hover>
          Feathers Auth
        </DaisyLink>
        <DaisyLink hover>
          Feathers Lo-Fi
        </DaisyLink>
        <DaisyLink hover>
          Feathers Pinion
        </DaisyLink>
        <DaisyLink hover>
          Consulting
        </DaisyLink>
      </nav>
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">About</FooterTitle>
        <DaisyLink hover>
          Terms of Service
        </DaisyLink>
        <DaisyLink hover>
          Privacy Policy
        </DaisyLink>
        <DaisyLink hover>
          Philosophy
        </DaisyLink>
        <DaisyLink hover>
          Ecosystem
        </DaisyLink>
        <DaisyLink hover>
          Contribute
        </DaisyLink>
      </nav>
      <nav class="flex flex-col gap-4">
        <FooterTitle class="normal-case">Learn</FooterTitle>
        <DaisyLink hover>
          Guides
        </DaisyLink>
        <DaisyLink hover>
          API
        </DaisyLink>
        <DaisyLink hover>
          Help
        </DaisyLink>
        <DaisyLink hover>
          Blog
        </DaisyLink>
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