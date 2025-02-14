export default defineCachedEventHandler(async (event) => {  
    const data = await $fetch('https://fakestoreapi.com/products?limit=3').then(response => {
        console.log('fetching products')
        console.log(response)
        return response
    })
    return data;
  }, {
      maxAge: 10
  });