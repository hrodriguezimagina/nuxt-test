<script setup lang="ts">
	const route = useRoute()
	
	const {status, data: posts} = await useLazyFetch('/api/posts')
	let post = 'empty'
	if(posts.value && posts.value.length){
		console.log('here')
		post = posts.value.find(item => item.id == route.params.id)	
	}
	
</script>

<template>
	<div>
		<pre>
			{{ post }}		
		</pre>
		<NuxtLink to="/posts">
			back to list 
		</NuxtLink>
	</div>
</template>
