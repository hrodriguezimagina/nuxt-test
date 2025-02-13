export default defineCachedEventHandler(async (event) => {  
    const data = await $fetch('https://fakestoreapi.com/products?limit=2')
    return data;
  }, {
      maxAge: 60 * 60
  });