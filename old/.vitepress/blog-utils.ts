import path from 'node:path'
import { writeFileSync } from 'node:fs'
import type { PageData, SiteConfig, TransformPageContext } from 'vitepress'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'
import type { VPBThemeConfig } from './blog-types'

export async function generateBlogFeed(
  siteConfig: SiteConfig<VPBThemeConfig>,
): Promise<void> {
  const blogConfig = siteConfig.site.themeConfig.blog ?? {}
  const feedConfig = blogConfig.feed ?? {}
  const baseUrl = feedConfig.baseUrl ?? 'localhost/blog'

  const feed = new Feed({
    title: feedConfig.title ?? blogConfig.title ?? '',
    description: feedConfig.description ?? blogConfig.description ?? '',
    id: feedConfig.id ?? baseUrl,
    link: feedConfig.link ?? baseUrl,
    language: feedConfig.language ?? 'en',
    image: feedConfig.image ?? '',
    favicon: feedConfig.favicon ?? `${baseUrl}/favicon.ico`,
    copyright: feedConfig.copyright ?? '',
  })

  const pattern = `${blogConfig?.postsPath ?? '/blog/posts'}/**/*.md`
  const output = feedConfig.outputPath ?? '/feed.rss'

  const posts = await createContentLoader(pattern, {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string)
      - +new Date(a.frontmatter.date as string),
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined,
        },
      ],
      date: frontmatter.date,
    })
  }

  writeFileSync(path.join(siteConfig.outDir, output), feed.rss2())
}

export async function processBlogData(
  pageData: PageData,
  ctx: TransformPageContext,
  aside = 'right',
  sidebar = false,
) {
  const config = ctx?.siteConfig?.site?.themeConfig as VPBThemeConfig
  const postsPattern = config.blog?.postsPath ?? 'blog/posts'
  const authorsPattern = config.blog?.authorsPath ?? 'blog/authors'

  if (pageData.relativePath.includes(postsPattern)) {
    pageData.frontmatter.blog = 'post'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
  if (pageData.relativePath.includes(authorsPattern)) {
    pageData.frontmatter.blog = 'author'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
}
