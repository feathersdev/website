import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  icon: z.string(),
})

export type Product = z.infer<typeof productSchema>

const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  extension: z.string(),
  date: z.string(),
  meta: z.object({
    tagline: z.string().optional(),
    author: z.string(),
    category: z.string(),
    imgSrc: z.string(),
    imgContainerClasses: z.string().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional()
  }),
  navigation: z.boolean().optional(),
  path: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string()
  }),
  stem: z.string(),
  slug: z.string(),
  body: z.string()
})

export type BlogPost = z.infer<typeof blogPostSchema>
export type BlogPostMeta = z.infer<typeof blogPostSchema.shape.meta>
export type BlogPostSEO = z.infer<typeof blogPostSchema.shape.seo>

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/**/*.yaml',
      schema: productSchema,
    }),

    // Docs
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
