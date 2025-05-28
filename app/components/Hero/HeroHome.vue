<template>
  <div class="pb-12 lg:pb-0">
    <Flex col class="mx-auto max-w-5xl text-center gap-10 mt-36 relative px-4">
      <Text size="5xl" class="flex flex-col items-center justify-center gap-3">
        <Flex row items-center justify-center class="gap-2 md:gap-4 text-3xl">
          <Text>Identity.</Text>
          <Text>Data.</Text>
          <Text>Realtime.</Text>
        </Flex>
        <div class="text-center font-bold text-6xl">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FF25B6] to-[#EA591E]">Beyond The Cloud</span>
        </div>
      </Text>
      
      <Text size="lg" class="px-4 md:px-12 lg:px-36">
        Redefining modern web application development with seamless identity management, powerful data synchronization, and instant real-time updates—all in one place.
      </Text>

      <Flex row items-center class="gap-4 mx-auto mb-8">
        <NuxtLink to="/auth" class="btn btn-xl bg-primary-content text-neutral hover:bg-primary-content/80">
          Get Started 🚀
        </NuxtLink>
      </Flex>

      <NuxtImg src="/img/planet.svg" class="w-[400px] lg:w-[599px] absolute transition-all duration-500 ease-in-out -bottom-[calc(100%-10rem)] -right-52 md:-right-72 lg:-bottom-32 xl:-right-108 planet-wobble" />
      <NuxtImg src="/img/rock-md.svg" class="w-[190px] absolute lg:-top-1 -left-52 transition-all duration-500 ease-in-out floating-rock-1" />
      <NuxtImg src="/img/rock-lg.svg" class="hidden lg:block w-[386px] absolute -bottom-80 left-28 transition-all duration-500 ease-in-out floating-rock-2" />
      <NuxtImg src="/img/shuttle.svg" class="hidden lg:block w-[355px] absolute -bottom-72 right-20 transition-all duration-500 ease-in-out floating-shuttle" />
    </Flex>
    <NuxtImg src="/img/bird-red.svg" class="w-[260px] lg:w-[342px] relative lg:-top-26 transition-all duration-500 ease-in-out floating" />
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
}

@keyframes float-rock-1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(10px, -25px) rotate(14deg);
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