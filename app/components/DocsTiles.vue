<script setup lang="ts">
import type { AuthDocsCollectionItem, FeathersDocsCollectionItem, PinionDocsCollectionItem } from '@nuxt/content';

defineProps<{
  pages: (PinionDocsCollectionItem | AuthDocsCollectionItem | FeathersDocsCollectionItem)[]
}>()
</script>

<template>
  <section class="mx-auto">
    <div v-if="pages" class="pt-6 px-3 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
      <Card 
        v-for="(page, index) in pages" 
        :key="page.id"
        is="article"
        class="card bg-base-300/20 rounded-xl h-full flex flex-col overflow-hidden"
        role="listitem"
      >
        <header :class="['blob-pattern', 'pattern-variant-' + (index % 5), 'aspect-video', 'flex', 'items-center', 'justify-center', 'relative', 'overflow-hidden']">
          <NuxtLink :to="page.path" class="w-full h-full flex items-center justify-center z-10">
            <h3 class="text-2xl text-center">{{ page.title }}</h3>
          </NuxtLink>
        </header>
        <CardBody class="flex-grow flex flex-col">
          <Text>{{ page.description }}</Text>
          
          <div class="flex-grow" />
          
          <CardActions>
            <NuxtLink 
              :to="page.path" 
              class="btn btn-ghost"
              :aria-label="`Read more about ${page.title}`"
            >
              Read More
              <Icon name="feather:chevron-right" size="24" />
            </NuxtLink>
          </CardActions>
        </CardBody>
      </Card>
    </div>
    <!-- <pre class="text-xs">{{ pages.map(page => ({ ...page, body: undefined })) }}</pre> -->
  </section>
</template>

<style scoped>
.blob-pattern {
  background-color: var(--color-base-300);
  position: relative;
}

.blob-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

/* Create a subtle hover effect */
.blob-pattern:hover::before {
  opacity: 0.3;
}

/* Pattern variant 0 */
.pattern-variant-0::before {
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 25%),
    radial-gradient(circle at 70% 65%, rgba(255, 255, 255, 0.3) 0%, transparent 20%),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
    radial-gradient(circle at 80% 15%, rgba(255, 255, 255, 0.3) 0%, transparent 20%),
    radial-gradient(circle at 10% 60%, rgba(255, 255, 255, 0.3) 0%, transparent 15%);
}

/* Pattern variant 1 */
.pattern-variant-1::before {
  background: 
    radial-gradient(ellipse at 65% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
    radial-gradient(circle at 15% 55%, rgba(255, 255, 255, 0.3) 0%, transparent 25%),
    radial-gradient(ellipse at 75% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 18%),
    radial-gradient(circle at 35% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 22%);
}

/* Pattern variant 2 */
.pattern-variant-2::before {
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 28%),
    radial-gradient(ellipse at 60% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 35%),
    radial-gradient(circle at 10% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 15%),
    radial-gradient(circle at 85% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 25%);
}

/* Pattern variant 3 */
.pattern-variant-3::before {
  background: 
    radial-gradient(ellipse at 45% 45%, rgba(255, 255, 255, 0.3) 0%, transparent 40%),
    radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.3) 0%, transparent 20%),
    radial-gradient(circle at 5% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 18%),
    radial-gradient(ellipse at 70% 15%, rgba(255, 255, 255, 0.3) 0%, transparent 22%);
}

/* Pattern variant 4 */
.pattern-variant-4::before {
  background: 
    radial-gradient(circle at 25% 15%, rgba(255, 255, 255, 0.3) 0%, transparent 22%),
    radial-gradient(circle at 50% 65%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
    radial-gradient(ellipse at 80% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 25%),
    radial-gradient(circle at 15% 75%, rgba(255, 255, 255, 0.3) 0%, transparent 18%),
    radial-gradient(ellipse at 90% 85%, rgba(255, 255, 255, 0.3) 0%, transparent 15%);
}
</style>