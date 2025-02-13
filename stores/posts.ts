import { defineStore } from 'pinia'

export const useMyPostsStore = defineStore('myPostsStore', {  
  state: () => ({
    posts: []
  }),
  actions: {
    async getPosts(){
      const { data } = await useFetch('/api/posts', { key: 'posts' })
      this.posts = data
      return data
    }, 
    async getPost(id){
      if(!this.posts.length) await this.getPosts()
      const post = this.posts.find(post => post.id == id) || {}
      return post
    }
  }
})

