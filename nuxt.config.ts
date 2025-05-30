import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    'daisy-ui-kit/nuxt',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'feathers.dev',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          },
          preload: [
            'json',
            'js',
            'ts',
            'html',
            'bash',
            'tsx',
            'svelte',
            'vue'
          ],
          langs: [
            'json',
            'js',
            'ts',
            'html',
            'css',
            'bash',
            'shell',
            'python',
            'go',
            'rust',
            'yaml',
            'markdown',
            'sql',
            'dockerfile',
            'nginx',
            'tsx',
            'svelte',
            'vue'
          ]
        },
      },
    },
    renderer: {
      anchorLinks: true,
    }
  },

  runtimeConfig: {
    public: {
      mdc: {
        headings: {
          anchorLinks: true,
        },
      },
    },
  },
  devServer: {
    port: 3004,
  },

  // enable nuxt 4 compatibility:
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      standalone: false,
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        jsx: true,
      },
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: 'feathersdev',
        dir: './app/assets/icons',
      },
    ],
  },
})
