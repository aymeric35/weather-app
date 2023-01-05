import VueAnimXyz from '@animxyz/vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAnimXyz)
})
