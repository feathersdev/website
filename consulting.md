---
layout: page
sidebar: false
---

<script setup lang="ts">
import { TransitionGroup, ref, computed } from 'vue'
import HomeHero from './components/HomeHero.vue'
import CTAButton from './components/CTAButton.vue'
import { discord } from './.vitepress/meta'
</script>

<div class="mx-auto max-w-screen-xl px-3 sm:px-12 md:px-24 lg:px-6 py-6 lg:py-16">
  <div class="flex flex-col relative">
    <div
      class="
        flex flex-col h-full
        rounded-lg border border-solid border-white/10 shadow-md
        transition-colors duration-200 bg-white/3
      "
    >
      <div class="text-gray-500 relative rounded-t-lg overflow-hidden mb-4">
        <div class="h-full overflow-hidden bg-black/30">
          <img
            src="/consulting.png"
            class="object-cover object-center h-full w-full"
          />
        </div>
      </div>
      <h1 class="mx-12 my-6 text-5xl font-medium tracking-tight text-[color:var(--vp-c-brand-dark)]" >
        We're the API and authentication experts
      </h1>
      <div class="flex flex-col px-5 pb-6 flex-grow">
        <div class="container mx-auto p-4">
          <div class="grid md:grid-cols-3 gap-4">
              <div class="p-4">
                  <h3 class="text-2xl font-bold pb-3">Experienced</h3>
                  <p>With more than a decade of experience in creating APIs and real-time applications we worked with startups to some of the largest technology companies in the world.</p>
              </div>
              <div class="p-4">
                  <h3 class="text-2xl font-bold pb-3">Open</h3>
                  <p>We maintain open source tools like <a class="text-primary" href="https://feathersjs.com" target="_blank">Feathers</a> and <a class="text-primary" href="/pinion/">Pinion</a> that have been downloaded millions of times and are used by thousands of developers around the world.</p>
              </div>
              <div class="p-4">
                  <h3 class="text-2xl font-bold pb-3">Flexible</h3>
                  <p>From a short meeting to point you in the right direction to prototyping or developing an entire application. Book a meeting and we will find the right fit for you.</p>
              </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center mx-auto pb-12">
        <CTAButton primary type="submit" name="Submit" class="hs-form__actions__submit" target="_blank" href="https://calendar.app.google/sHQ98eYxL1RWYBQx8">
          Book a meeting now
        </CTAButton>
        <a :href="discord" target="_blank" class="mt-3 text-base opacity-80 hover:opacity-100 transition-all duration-200">Or join our Discord</a>
      </div>
    </div>
  </div>
</div>
