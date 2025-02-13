export default defineCachedEventHandler(async (event) => {  
    const data = await $fetch('https://fakestoreapi.com/products?limit=4')
    return data;
  }, {
      maxAge: 60 * 60 //1hour
  });