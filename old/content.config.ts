import { defineCollection, defineContentConfig } from '@nuxt/content'
import { productSchema, blogPostSchema, menuSchema } from './content.config.schema'

export default defineContentConfig({
  collections: {
    // Products
    products: defineCollection({
      type: 'data',
      source: 'products/**/*.yaml',
      schema: productSchema,
    }),

    // Site Pages and Menus
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
    }),
    menus: defineCollection({
      type: 'data',
      source: 'menus/**/*.json',
      schema: menuSchema
    }),

    // Docs
    pinionDocs: defineCollection({
      type: 'page',
      source: 'pinion/docs/**/*.md',
    }),
    pinionShared: defineCollection({
      type: 'page',
      source: 'pinion/shared/**/*.md',
    }),
    feathersDocs: defineCollection({
      type: 'page',
      source: 'feathers/docs/**/*.md',
    }),
    authDocs: defineCollection({
      type: 'page',
      source: 'auth/docs/**/*.md',
    }),
    lofiDocs: defineCollection({
      type: 'page',
      source: 'lofi/docs/**/*.md',
    }),
    
    // Blog
    blogPosts: defineCollection({
      type: 'page',
      source: 'blog/posts/**/*.md',
      schema: blogPostSchema,
    }),
    blogAuthors: defineCollection({
      type: 'page',
      source: 'blog/authors/**/*.md',
    }),
    blogCategories: defineCollection({
      type: 'page',
      source: 'blog/categories/**/*.md',
    }),
    blogDrafts: defineCollection({
      type: 'page',
      source: 'blog/_drafts/**/*.md',
    })
  },
})
