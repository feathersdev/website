<template>
  <Flex col items-center justify-center class="md:flex-row py-8 md:py-24 bg-base-300/25 rounded-4xl">
    <Flex col class="md:flex-row-reverse items-center gap-6">
      <Flex class="px-6 md:pl-24">
        <img src="/img/bird-comms.png" alt="Discord" />
      </Flex>
      <Flex col items-center class="gap-4 md:items-start py-5 md:pl-8">
        <!-- <Text size="md" class="text-center md:text-left text-base-content/70">Need more support?</Text> -->
        <Text is="h3" size="3xl" bold class="text-center md:text-left">Join our community</Text>
        <Text size="md" class="text-center md:text-left text-base-content/70 text-balance line-clamp-2"
          >Get help and support <br />
          from the Feathers community</Text
        >
        <Flex>
          <NuxtLink
            primary
            href="https://discord.gg/qa8kez8QBx"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-xl gap-2 mt-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.293a.077.077 0 01-.008.127 12.27 12.27 0 01-1.873.892.077.077 0 00-.041.105c.36.698.774 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 005.99-3.03.077.077 0 00.032-.054c.5-5.18-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.946-2.415 2.157-2.415 1.21 0 2.175 1.08 2.157 2.415 0 1.333-.946 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.954-2.415 2.157-2.415 1.203 0 2.175 1.08 2.157 2.415 0 1.333-.955 2.418-2.157 2.418z"
              />
            </svg>
            Join our Discord
          </NuxtLink>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
</template>
