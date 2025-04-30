import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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

  css: [
    '~/assets/css/main.css',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
            // dark: 'monokai',
          },
        },
      },
    },
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
