// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },  
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },

  /* routes */
  routeRules: {
    
    
    ///'/': { prerender: true },
    
    
    '/products': { swr: 20 },
    // Generated at build time for SEO purpose
    '/coffee': { prerender: true},


    '/posts': { swr: true },
    '/post/**': { swr: 3600 }, // Cache for 1 hour
    
    // Cached in seconds 
    '/api/*': { cache: { maxAge: 60 * 60 } } // Cache for 1 hour

  },

/*
  $production: {
    routeRules: {
      '/coffee': { prerender: true}
    }
  },
  $development: {
    routeRules: {      
      '/coffee': { prerender: true}
    }
    
    //
  },
  $env: {
    staging: {
      // 
    }
  },
  */


})
