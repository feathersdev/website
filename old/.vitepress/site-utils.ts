import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links: any[] = []

export function sitemapTransformHtml(_: any, id: any, { pageData }: any) {
  if (!/[\\/]404\.html$/.test(id)) {
    links.push({
    // you might need to change this if not using clean urls mode
      url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
      lastmod: pageData.lastUpdated,
    })
  }
}

export async function generateSitemap({ outDir }: any) {
  const sitemap = new SitemapStream({
    hostname: 'https://dove.feathersjs.com/',
  })
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
  sitemap.pipe(writeStream)
  links.forEach(link => sitemap.write(link))
  sitemap.end()
  await new Promise(r => writeStream.on('finish', r))
}
