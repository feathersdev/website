import { z } from 'zod'

// Products
export const productSchema = z.object({
  title: z.string(),
  published: z.boolean(),
  highlight: z.boolean(),
  shortName: z.string(),
  description: z.string(),
  longDescription: z.string(),
  slug: z.string(),
  icon: z.string(),
  logo: z.string(),
  link: z.string(),
  meta: z.object({
    iconImage: z.optional(z.string()),
    birdImage: z.string(),
    docLink: z.optional(z.string()),
    planetImage: z.string(),
    menuDescription: z.string(),
  }),
})
export type Product = z.infer<typeof productSchema>

// Blog
export const blogPostSchema = z.object({
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
    tags: z.array(z.string()).optional(),
  }),
  navigation: z.boolean().optional(),
  path: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  stem: z.string(),
  slug: z.string(),
})
export type BlogPost = z.infer<typeof blogPostSchema>
export type BlogPostMeta = z.infer<typeof blogPostSchema.shape.meta>
export type BlogPostSEO = z.infer<typeof blogPostSchema.shape.seo>

// Menus
export type MenuItem = {
  title: string
  path: string
  stem: string
  icon?: string
  iconClasses?: string
  noDivider?: boolean
  meta: {
    new?: boolean
  }
  children?: MenuItem[]
}
export const menuItemSchema: z.ZodType<MenuItem> = z.lazy(() =>
  z.object({
    title: z.string(),
    path: z.string(),
    stem: z.string(),
    icon: z.string().optional(),
    iconClasses: z.string().optional(),
    noDivider: z.boolean().optional(),
    meta: z.object({
      new: z.boolean().optional(),
    }),
    children: z.array(menuItemSchema).optional(),
  }),
)

export const menuSchema = z.object({
  title: z.string(),
  icon: z.string().optional(),
  iconClasses: z.string().optional(),
  items: z.array(menuItemSchema),
})
export type Menu = z.infer<typeof menuSchema>
