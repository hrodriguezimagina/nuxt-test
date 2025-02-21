
import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'qsite'
  },
  setup(options) {
    const resolver = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'qsiteTest',
        path: '/site/test',
        file: resolver.resolve('pages/test.vue')
       })
    })
  }
})