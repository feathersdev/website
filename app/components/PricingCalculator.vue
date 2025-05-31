<script setup lang="ts">
import { computed, ref } from 'vue'

const FREE_TOKENS = 1000
const MAX_PRICE = 1500

const userCountSteps: Record<number, number> = {
  0: 30,
  1: 250,
  2: 500,
  3: 1000,
  4: 2500,
  5: 5000,
  6: 7500,
  7: 10_000,
  8: 20_000,
  9: 50_000,
  10: 100_000,
  11: 250_000,
}
const currentStep = ref(0)
const userCount = computed(() => {
  return userCountSteps[currentStep.value]!
})

const loginsFrequency: Record<number, { name: string, amount: number }> = {
  0: { name: 'Month', amount: 1 },
  1: { name: 'Week', amount: 4 },
  2: { name: 'Workday', amount: 20 },
  3: { name: 'Day', amount: 30 },
}
const currentLoginsPerMonth = ref(0)
const loginsPerMonth = computed(() => loginsFrequency[currentLoginsPerMonth.value]!)

const tokensPerMonth = computed(() => loginsPerMonth.value.amount * userCount.value)
const price = computed(() => (tokensPerMonth.value <= FREE_TOKENS ? 0 : Math.ceil(tokensPerMonth.value / 10000) * 10))
const formattedPrice = computed(() => {
  if (price.value >= MAX_PRICE) {
    return `${MAX_PRICE}+`
  }
  return price.value
})
const mauPrice = computed(() => (price.value / userCount.value).toFixed(3))

// tokensPerMonth formatted as 1k, 1m, 1b
const formattedTokensPerMonth = computed(() => {
  const tokens = tokensPerMonth.value
  if (tokens < 1_000) {
    return `${tokens}`
  }
  if (tokens < 1_000_000) {
    return `${tokens / 1_000}k`
  }
  if (tokens < 1_000_000_000) {
    return `${tokens / 1_000_000}m`
  }
  return `${tokens / 1_000_000_000}b`
})
</script>

<template>
  <div class="p-8 sm:p-12 rounded-xl border border-solid border-white flex flex-col gap-10 sm:mx-4 bg-gradient-to-t from-base-100 to-base-200">
    <Flex col class="gap-2">
      <h2 class="text-4xl! !m-0 !p-0 border-none!">
        Pricing Calculator
      </h2>
      <div class="text-base">
        Estimate your monthly cost based on how often users use your app.
        A token is valid for 1 day, and you only pay for actual tokens used.
      </div>
    </Flex>

    <Flex col class="rounded-xl border border-solid border-white/10 p-4 gap-1">
      <Flex class="md:flex-row items-center gap-2">
        <label class="text-lg font-semibold">Number of Users</label>
        <span class="text-lg font-semibold text-right border border-solid border-white/30 px-4 rounded-lg">{{ userCount
          }}</span>
      </Flex>
      <Range v-model="currentStep" min="0" :max="Object.keys(userCountSteps).length - 1" step="1" class="w-full" /> 
    </Flex>

    <Flex col class="rounded-xl border border-solid border-white/10 p-4 gap-1">
      <Flex col class="items-center sm:flex-row gap-2">
        <Text is="label" lg semibold>Users visit once every</Text>
        <Text lg semibold right center class="border border-solid border-white/30 px-4 rounded-lg">
          {{ loginsPerMonth.name }}
        </Text>
      </Flex>
      <Range v-model="currentLoginsPerMonth" min="0" max="3" step="1" class="w-full" />
    </Flex>

    <Flex col items-center class="gap-8">
      <Flex col items-center>
        <Text size="2xl" medium>
          {{ formattedTokensPerMonth }}
        </Text>
        <Text center sm class="opacity-75">
          tokens
        </Text>
      </Flex>

      <Flex row wrap items-center class="gap-8">
        <Flex col items-center>
          <div class="text-white text-5xl font-medium">
            ${{ formattedPrice }}
          </div>
          <div class="text-sm/5 text-white/75 text-center">
            <div>USD per month</div>
            <transition>
              <div v-if="userCount > 1000 && price < MAX_PRICE">
                ${{ mauPrice }} max per monthly active user
              </div>
            </transition>
          </div>
        </Flex>
      </Flex>

      <div v-if="price >= MAX_PRICE" class="text-secondary">
        <a href="mailto:hello@feathers.dev">Contact Us</a>&nbsp;
        <span>for Volume Discounts and Self-hosted options</span>
      </div>

      <NuxtLink class="btn btn-xl btn-primary" to="https://app.feathers.dev/">
        Get started for free
      </NuxtLink>
    </Flex>
  </div>
</template>
