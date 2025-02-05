import { defineConfig } from 'vitepress'
import { generateBlogFeed, processBlogData } from './blog-utils'
import nav from './config.nav'
import sidebar from './config.sidebar'
import {
  bluesky,
  description,
  discord,
  font,
  github,
  name,
  ogImage,
  ogUrl,
} from './meta'
import { generateSitemap, sitemapTransformHtml } from './site-utils'

export default defineConfig({
  lang: 'en-US',
  title: name,
  description,
  appearance: 'force-dark',
  srcExclude: ['examples/**/*'],
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: `Feathers Cloud Inc.`,
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'feathersjs, feathers, react, vue, preact, svelte, solid, typescript, esm, node, deno, cloudflare, workers',
      },
    ],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo-cloud.svg',

    socialLinks: [
      // manually add the RSS icon, since the rss plugin mistakenly adds two icons. See vite.config.ts
      // this link will only work in the production build.
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><title>RSS</title><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM112 416c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48zm157.533 0h-34.335c-6.011 0-11.051-4.636-11.442-10.634c-5.214-80.05-69.243-143.92-149.123-149.123c-5.997-.39-10.633-5.431-10.633-11.441v-34.335c0-6.535 5.468-11.777 11.994-11.425c110.546 5.974 198.997 94.536 204.964 204.964c.352 6.526-4.89 11.994-11.425 11.994zm103.027 0h-34.334c-6.161 0-11.175-4.882-11.427-11.038c-5.598-136.535-115.204-246.161-251.76-251.76C68.882 152.949 64 147.935 64 141.774V107.44c0-6.454 5.338-11.664 11.787-11.432c167.83 6.025 302.21 141.191 308.205 308.205c.232 6.449-4.978 11.787-11.432 11.787z" fill="currentColor"></path></svg>',
        },
        link: '/feed.rss',
      } as any,
      { icon: 'bluesky', link: bluesky },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],

    footer: {
      message: '',
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} Feathers Cloud Inc.`,
    },

    blog: {
      title: 'Feathers Cloud Blog',
      description: 'Read about all things Feathers Cloud',
      defaultAuthor: 'daffl',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
        feathers: 'i-[logos/feathersjs]',
      },
    },

    nav,
    sidebar,

    search: {
      provider: 'local',
    },
  },
  transformHead({ pageData }) {
    const { frontmatter: { title, description, tagline, imgSrc } } = pageData

    const ogDescription = tagline || description || ''

    type Tag = [string, Record<string, string>]
    const tags: Tag[] = [
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ]

    if (title) {
      tags.push(['meta', { property: 'og:title', content: title }])
      tags.push(['meta', { name: 'twitter:title', content: title }])
    }

    if (ogDescription) {
      tags.push(['meta', { name: 'description', content: ogDescription }])
      tags.push(['meta', { property: 'og:description', content: ogDescription }])
      tags.push(['meta', { name: 'twitter:description', content: ogDescription }])
    }

    if (imgSrc) {
      tags.push(['meta', { property: 'og:image', content: imgSrc }])
      tags.push(['meta', { name: 'twitter:image', content: imgSrc }])
    }

    return tags
  },
  transformHtml: sitemapTransformHtml,
  buildEnd: async (options) => {
    await generateSitemap(options)
    await generateBlogFeed(options)
  },
  async transformPageData(pageData, ctx) {
    await processBlogData(pageData, ctx)
  },
})
