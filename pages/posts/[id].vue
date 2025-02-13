<script setup lang="ts">	
	const postsStore = useMyPostsStore();
	const route = useRoute()
	const post = await postsStore.getPost(route.params.id)	
</script>

<template>
	<div>
		<NuxtLink to="/posts">
			BACK to list 
		</NuxtLink>
		<div>						
			<img class="w-[250px] rounded-b-md" :src="post.image">
			<h5 class="mb-2 text-xl font-medium leading-tight">{{ post.title }}</h5>
			<p class="mb-4 text-base">
				{{ post.description }}
			</p>  					
		</div>			
		<pre>
			{{ post }}		
		</pre>		
	</div>
</template>
