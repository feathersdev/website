<template>
  <div class="pb-32">
    <Flex col class="mx-auto max-w-5xl text-center gap-10 mt-46 relative px-4">
      <Text size="5xl" bold class="flex flex-col items-center justify-center gap-3">
        <div class="text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FF25B6] to-[#EA591E]">Beyond The Cloud</span>
        </div>
        <Flex row items-center justify-center class="gap-2 md:gap-4">
          <Text size="4xl">Local.</Text>
          <Text size="4xl">Private.</Text>
          <Text size="4xl" class="text-white">Fast.</Text>
        </Flex>
      </Text>
      
      <Text size="lg" class="px-4 md:px-12 lg:px-36">
        We create powerful tools and platforms designed to streamline your development workflow—so your team can focus
        less on setup and more on shipping great products, faster.
      </Text>

      <Flex row items-center class="gap-4 mx-auto mb-8">
        <Button lg class="bg-primary-content text-neutral hover:bg-primary-content/80">Get Started</Button>
        <Button lg outline>Documentation</Button>
      </Flex>

      <NuxtImg src="/img/planet.svg" class="w-[318px] lg:w-[599px] h-[218px] lg:h-[412px] absolute transition-all duration-500 ease-in-out -bottom-[calc(100%-8rem)] -right-10 lg:-bottom-32 lg:-right-108 planet-wobble" />
      <NuxtImg src="/img/rock-md.svg" class="w-[190px] h-[234px] absolute lg:-top-1 -left-52 transition-all duration-500 ease-in-out floating-rock-1" />
      <NuxtImg src="/img/rock-lg.svg" class="hidden lg:block w-[386px] h-[218px] absolute -bottom-128 left-28 transition-all duration-500 ease-in-out floating-rock-2" />
      <NuxtImg src="/img/shuttle.svg" class="hidden lg:block w-[355px] h-[220px] absolute -bottom-110 right-0 transition-all duration-500 ease-in-out floating-shuttle" />
    </Flex>
    <NuxtImg src="/img/astronaut-bird.svg" class="w-[160px] lg:w-[342px] h-[220px] lg:h-[447px] relative lg:-top-1 transition-all duration-500 ease-in-out floating" />
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