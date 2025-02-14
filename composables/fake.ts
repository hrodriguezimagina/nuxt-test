export const useFake = async () => {
    //const { data } = await useFetch('https://fakestoreapi.com/products', { key: 'posts' })
    //const { data } = await useFetch('/api/posts', { key: 'posts' })
    const data = await $fetch('/api/posts')
    console.log(data)
    return data
  }