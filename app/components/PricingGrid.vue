<template>
  <Flex col class="sm:flex-row w-full mb-10">
    <Card class="flex flex-col justify-center items-center py-8 w-full sm:w-1/2 gap-5 border-4 border-none border-b-none sm:border-solid border-neutral-content/25 relative sm:-right-2 sm:rounded-r-none bg-base-100 sm:border-r-none rounded-l-4xl">
      <CardBody class="gap-4 text-center py-12 w-full items-center justify-center">
        <Flex col items-center>
          <CardTitle class="text-3xl font-semibold">Free Plan</CardTitle>
          <Text sm class="opacity-60"> No credit card required. </Text>
        </Flex>

        <Flex row items-end justify-center class="my-3">
          <Text size="4xl">$0</Text><Text xs class="relative bottom-1 ml-1">/mo.</Text>
        </Flex>
        
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>apps</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>social integrations</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>250</Text>
          <Text sm>monthly users</Text>
        </Flex>
        <Flex col>
          <Text xl>1 GB</Text>
          <Text sm>data sync</Text>
        </Flex>
        <NuxtLink 
          target="_blank"
          class="btn btn-lg btn-secondary text-white! mt-4 mb-8 sm:mb-0" 
          to="https://app.feathers.dev/">
          Sign Up
        </NuxtLink>
      </CardBody>
    </Card>

    <Card class="justify-center items-center w-full sm:w-3/5 border-4 border-solid border-primary relative -top-4 sm:top-0 sm:z-10 -my-3 bg-base-100 rounded-4xl overflow-hidden">
      <CardBody class="gap-4 text-center py-12 bg-primary/20 w-full items-center justify-center">
        <CardTitle class="text-3xl font-semibold">Pro Plan</CardTitle>
        <Flex row items-end justify-center class="my-3">
          <div class="relative inline-flex items-end mr-2">
            <Text size="3xl" class="text-neutral-content/40">$30</Text>
            <div class="absolute top-1/2 w-full h-0.5 bg-error transform"></div>
          </div>
          <Text size="4xl" class="text-warning">$15</Text><Text xs class="relative bottom-1 ml-1">/mo.</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>apps</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>social integrations</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>2,500</Text>
          <Text sm>monthly users</Text>
          <Text xs class="opacity-60">$0.01 per additional user</Text>
        </Flex>
        <Flex col>
          <Text xl>10 GB</Text>
          <Text sm>data sync</Text>
          <Text xs class="opacity-60">$0.50 per additional GB</Text>
        </Flex>
        <Flex row items-center class="gap-2">
          <Text semibold xl>Custom Themes</Text>
        </Flex>
        <NuxtLink 
          target="_blank"
          class="btn btn-lg btn-primary text-white! mt-4 mb-8 sm:mb-0" 
          to="https://app.feathers.dev/">
          Sign Up
        </NuxtLink>
      </CardBody>
    </Card>

    <Card class="flex flex-col justify-center items-center py-8 w-full sm:w-1/2 gap-5 border-4 border-none border-b-none sm:border-solid border-neutral-content/25 relative sm:-left-2 sm:z-0 sm:rounded-l-none bg-base-100 rounded-r-4xl">
      <CardBody class="gap-4 text-center py-8 w-full items-center justify-center">
        <CardTitle class="text-3xl font-semibold">Business Plan</CardTitle>
        <Flex row items-end justify-center class="my-3">
          <Text size="4xl">$300</Text><Text xs class="relative bottom-1 ml-1">/mo.</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>apps</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>Unlimited</Text>
          <Text sm>social integrations</Text>
        </Flex>
        <Flex col>
          <Text semibold xl>100,000</Text>
          <Text sm>monthly users</Text>
          <Text xs class="opacity-60">$0.005 per additional user</Text>
        </Flex>
        <Flex col>
          <Text xl>100 GB</Text>
          <Text sm>data sync</Text>
          <Text xs class="opacity-60">$0.25 per additional GB</Text>
        </Flex>
        <Flex row items-center class="gap-2">
          <Text semibold xl>Custom Themes</Text>
        </Flex>
        <NuxtLink 
        class="btn btn-lg btn-primary text-white! mt-4 mb-8 sm:mb-0" 
          target="_blank"
          to="https://app.feathers.dev/">
          Sign Up
        </NuxtLink>
      </CardBody>
    </Card>
  </Flex>
</template>