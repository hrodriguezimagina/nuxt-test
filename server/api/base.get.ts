export default defineCachedEventHandler(async (event) => {
    const params = getQuery(event)
    let api = params.api
    delete params.api

    const data = await $fetch(`${api}`, {
        params: params
    }).then(response => {
        console.warn('fetching'+api+Date())
        return response
    })
    return data;
  }, {
      maxAge: 1,  //minimun time, 
      //staleMaxAge: 1, // sent to the client while the cache updates in the background.
      //getKey: () => cacheName
  });
