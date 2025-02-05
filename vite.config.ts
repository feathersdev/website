import type { Plugin } from 'vite'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'
import fs from 'node:fs'
import transformerDirective from '@unocss/transformer-directives'
import fg from 'fast-glob'
import { resolve } from 'pathe'
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { RssPlugin } from 'vitepress-plugin-rss'
import {
  description,
  name,
  pwaFontsRegex,
  pwaFontStylesRegex,
  shortName,
} from './.vitepress/meta'
import { optimizePages } from './.vitepress/scripts/assets'

const PWA = VitePWA({
  outDir: '.vitepress/dist',
  registerType: 'autoUpdate',
  // include all static assets under public/
  includeAssets: fg.sync('**/*.{png,svg,ico,txt}', {
    cwd: resolve(__dirname, 'public'),
  }),
  manifest: {
    id: '/',
    name,
    short_name: shortName,
    description,
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'logo.svg',
        sizes: '165x165',
        type: 'image/svg',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    runtimeCaching: [
      {
        urlPattern: pwaFontsRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: pwaFontStylesRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
})

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts',
      resolvers: [ElementPlusResolver({ ssr: false })],
    }),
    Unocss({
      theme: {
        colors: {
          'primary': 'var(--primary)',
          'primary-content': 'var(--primary-content)',
          'neutral': 'var(--neutral)',
          'neutral-content': 'var(--neutral-content)',
          'base-100': 'var(--neutral)',
          'base-200': '#241f47',
          'info': 'var(--info)',
          'success': 'var(--success)',
          'warning': 'var(--warning)',
          'error': 'var(--error)',
        },
      },
      shortcuts: [
        [
          'btn',
          'px-4 py-1 rounded-lg inline-flex justify-center gap-2 text-white leading-30px children:mya !no-underline cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
      ],
      presets: [
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
        presetTypography(),
      ],
      transformers: [transformerDirective()],
    }),
    IncludesPlugin(),
    PWA,
    {
      name: 'pwa:post',
      enforce: 'post',
      async buildEnd() {
        const pwaPlugin: VitePluginPWAAPI = PWA.find(
          i => i.name === 'vite-plugin-pwa',
        )?.api
        const pwa = pwaPlugin && !pwaPlugin.disabled
        await optimizePages(pwa)
        if (pwa) {
          await pwaPlugin.generateSW()
        }
      },
    },
    // https://github.com/ATQQ/sugar-blog/tree/master/packages/vitepress-plugin-rss#options
    RssPlugin({
      title: 'The Feathers Cloud Blog',
      baseUrl: 'https://feathers.cloud',
      copyright: 'Copyright (c) 2012-present',
      // don't automatically add the rss icon because the plugin mistakenly adds two in production.
      icon: false,
      // only include blog posts in the rss feed
      filter(value) {
        return value.filepath.includes('blog/posts')
      },
    }),
  ],
  ssr: { noExternal: ['element-plus'] },
})

function IncludesPlugin(): Plugin {
  return {
    name: 'include-plugin',
    enforce: 'pre',
    transform(code, id) {
      let changed = false
      code = code.replace(/\[@@include\]\((.*?)\)/, (_, url) => {
        changed = true
        const full = resolve(id, url)
        return fs.readFileSync(full, 'utf-8')
      })
      if (changed) {
        return code
      }
    },
  }
}
