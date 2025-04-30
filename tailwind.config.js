/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/daisy-ui-kit/app/components/*.{vue,js}',
    './app/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/plugins/**/*.{js,ts,mjs}',
    './app/composables/**/*.{js,ts,mjs}',
    './app/utils/**/*.{js,ts,mjs}',
    './app/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
    './app/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
    './app/app.config.{js,ts,mjs}',
    './app/app/spa-loading-template.html',
    './content/**/*.{md,vue}',
  ],
  theme: {
    extend: {},
  },
}
