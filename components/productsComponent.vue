<template>
	<div>
		{{  data }}
	</div>
  </template>
  <script setup>
import { useMyPostsStore } from '../stores/posts'
 
	const data = ref()
	onMounted(async () => {
		//const postStore = useMyPostsStore();
		//await postStore.getPosts()		
		//data.value = postStore.posts
		console.log('mounted')
		useFake().then(response => {
			data.value = response
		 })

	})


	
	  
		

	  
  </script>