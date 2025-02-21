
import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'qsite'
  },
  setup(options) {
    const resolver = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'qsite.admin.test',
        path: '/site/test',        
        /* file is the component/page to render */
        file: resolver.resolve('pages/test.vue'),  // when the page is in inside the module
        //file: '~/pages/coffee.vue',  //when the page is  in absoulte route        
        
        
        meta: {
          //layout: 'blank', //  if not defined takes /layout/default          
          permission: 'iblog.posts.manage',
          activated: true,
          authenticated: true,
          //crud : import('modules/qblog/_crud/posts'),
          title: 'iblog.cms.sidebar.adminPosts',
          icon: 'fa-light fa-newspaper',
          subHeader: {
            refresh: true,
          }
        }
       })
    })
  }
})