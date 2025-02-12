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

  /* routes */
  routeRules: {
    //'/**': { isr: false },
    '/products': { swr: 20 },
    // Generated at build time for SEO purpose
    '/coffee': { prerender: true},
    
    // Cached in seconds 
    '/api/*': { cache: { maxAge: 10 } },
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
