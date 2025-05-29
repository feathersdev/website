<template>
  <Flex col items-center class="lg:flex-row gap-6 px-0 lg:px-6">
    <Flex col class="max-w-xl text-left flex-1">
      <h3 class="text-2xl px-3 sm:px-0">
        Try an example app
      </h3>
      <p class="mt-1 mb-6 opacity-80 px-3 sm:px-0">
        Use the <code class="text-[var(--color-secondary)]">example</code> command to create an example application for your
        backend platform and frontend framework.
      </p>
      <div class="border-10 border-solid border-base-200 rounded-xl max-w-screen">
        <slot name="cli" />
      </div>
    </Flex>

    <Text size="2xl">
      OR
    </Text>

    <Flex col class="max-w-xl text-left flex-1">
      <h3 class="text-2xl px-3 sm:px-0">
        Integrate your app
      </h3>
      <p class="mt-1 mb-6 opacity-80 px-3 sm:px-0">
        Use the <code class="text-[var(--color-secondary)]">integrate</code> command to integrate Feathers Auth into
        your existing application.
      </p>
      <div class="border-10 border-solid border-base-200 rounded-xl max-w-screen">
        <slot name="cli2" />
      </div>
    </Flex>
  </Flex>
</template>