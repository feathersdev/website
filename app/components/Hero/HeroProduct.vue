<script setup lang="ts">
import type { Product } from '~~/content.config.schema';

defineProps<{
  product: Product
  birdClasses: string
  planetClasses: string
}>()
</script>

<template>
  <div class="pb-32">
    <Flex col class="mx-auto max-w-6xl text-left lg:text-left gap-10 mt-32 relative px-4 lg:flex-row">
      <Flex col items-center class="lg:items-start gap-12 flex-1">
        <Text size="3xl">{{ product.description }}</Text>

        <div>
          <NuxtImg :src="product.logo" class="w-96"/>
        </div>

        <Text is="div" base center class="lg:text-left">
          {{ product.longDescription }}
        </Text>

        <NuxtLink to="/auth" class="btn btn-xl bg-primary-content text-neutral hover:bg-primary-content/80">
          Get Started
        </NuxtLink>
      </Flex>

      <Flex class="relative flex-1">
        <NuxtImg :src="product.meta.birdImage" :class="birdClasses" />
        <NuxtImg :src="product.meta.planetImage" :class="planetClasses" />
        <NuxtImg src="/img/rock-md.svg" class="absolute w-[144px] lg:-top-1 left-0 transition-all duration-500 ease-in-out floating-rock-1" />
        <NuxtImg src="/img/rock-lg.svg" class="absolute w-[386px] -bottom-24 -right-28 transition-all duration-500 ease-in-out floating-rock-2 hidden lg:block" />
      </Flex>
      


    </Flex>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-rock-1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(10px, -15px) rotate(14deg);
  }
  66% {
    transform: translate(-8px, 5px) rotate(-0.5deg);
  }
}

@keyframes float-rock-2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  30% {
    transform: translate(-5px, -10px) rotate(-4deg);
  }
  70% {
    transform: translate(8px, 8px) rotate(4deg);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}

.floating-rock-1 {
  animation: float-rock-1 18s ease-in-out infinite;
  will-change: transform;
  transform-origin: center;
}

.floating-rock-2 {
  animation: float-rock-2 19s ease-in-out infinite;
  will-change: transform;
  transform-origin: center;
}

@keyframes float-shuttle {
  0%, 100% {
    transform: 
      translate(0, 0) 
      rotate(-1deg) 
      scale(1);
  }
  25% {
    transform: 
      translate(-5px, -3px) 
      rotate(0.5deg) 
      scale(1.005);
  }
  50% {
    transform: 
      translate(3px, 2px) 
      rotate(-0.5deg) 
      scale(0.995);
  }
  75% {
    transform: 
      translate(-2px, 4px) 
      rotate(0.3deg) 
      scale(1.002);
  }
}

.floating-shuttle {
  animation: float-shuttle 20s ease-in-out infinite;
  will-change: transform;
  transform-origin: center;
}

@keyframes planet-wobble {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-22deg);
  }
}

.planet-wobble {
  animation: planet-wobble 60s infinite;
  will-change: transform;
  transform-origin: center;
}
</style>