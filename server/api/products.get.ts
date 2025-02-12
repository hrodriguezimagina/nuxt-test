import { reactive  } from "vue";

let products = reactive([])

export default defineEventHandler(async () => {	
  console.warn('products => ', products)
  if(products.length) {
    console.log('cached')
    return products
  }
    console.log('fetch')
    products = await $fetch('https://fakestoreapi.com/products')    
    return products
  })




