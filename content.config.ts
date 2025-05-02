import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  icon: z.string(),
})

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
    products: defineCollection({
      type: 'data',
      source: 'products/**/*.yaml',
      schema: productSchema,
    }),
  },
})
