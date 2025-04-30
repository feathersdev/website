import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
    }),
    pinion: defineCollection({
      type: 'page',
      source: 'pinion/**/*.md',
    }),
    feathers: defineCollection({
      type: 'page',
      source: 'feathers/**/*.md',
    }),
    auth: defineCollection({
      type: 'page',
      source: 'auth/**/*.md',
    }),
  },
})
