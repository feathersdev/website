<template>
  <div class="bg-[#251938]">
    <Footer class="sm:footer-horizontal text-neutral-content max-w-[87rem] mx-auto p-10">
      <nav class="sm:hidden lg:block">
        <Logo />
      </nav>
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
  </div>
</template>