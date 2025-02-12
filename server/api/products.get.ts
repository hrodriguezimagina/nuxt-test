export default defineEventHandler(async () => {
	console.log('fetching products')
  const products = await $fetch('https://fakestoreapi.com/products')    
  return products
  })
