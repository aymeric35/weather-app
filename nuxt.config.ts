// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@fontsource/quicksand/400.css',
    '@fontsource/quicksand/700.css',
    '@/assets/styles/main.scss',
  ],
  vite: {
    plugins: [
      svgLoader(),
    ],
    devBundler: 'legacy', // to be removed once a fix is deployed, see : https://github.com/nuxt/framework/issues/7794
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "@/assets/styles/conf.scss" as *;',
          ],
        },
      },
    },
  },
})
