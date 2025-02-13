<script setup lang="ts">

//import { useMyPostsStore } from '../../stores/posts';
// We can access same data later using 'posts' key
//const { data: posts } = useNuxtData('posts')
const postsStore = useMyPostsStore();
await postsStore.getPosts()

</script>

<template>
	<div>		
		<NuxtLink to="/coffee" >
			BACK to coffee page: 
		</NuxtLink>		
		<h1 class="m-8">Products list: {{ postsStore.posts.data.length }}</h1>		
		<div class="m-8">
				<template v-for="(item, index) in postsStore.posts.data">			
					<div>
						<NuxtLink :to="{ name: 'posts-id', params: { id: item.id } }">
							
							<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.title }}</h5>
							
  					</NuxtLink>
					</div>							
				</template>
			</div>
	</div>
</template>
