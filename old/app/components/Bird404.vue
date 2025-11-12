<script setup lang="ts">
const { 
  title = '404 Lost in Space', 
  subTitle = 'We could not find that post.' 
} = defineProps<{
  title?: string
  subTitle?: string
}>()
</script>

<template>
  <div class="floating my-18">
    <div class="floating">
      <NuxtImg src="/img/bird-green.svg" class="w-[112px] lg:w-[230px] transition-all duration-500 ease-in-out rotating mx-auto" />
    </div>
    <Titles :title="title" :sub-title="subTitle"/>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-55px);
  }
}
.floating {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
.rotating {
  animation: rotate 12s linear infinite;
  will-change: transform;
}
</style>