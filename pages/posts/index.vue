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
			BACK to coffee page
		</NuxtLink>		
		<h1 class="m-8">Products list</h1>		
		<div class="grid grid-cols-4 gap-4">
				<template v-for="(item, index) in postsStore.posts">			
					<div>
						<NuxtLink :to="{ name: 'posts-id', params: { id: item.id } }">
							<img class="w-[250px] rounded-b-md" :src="item.image">
							<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.title }}</h5>
							<p class="mb-4 text-base">
								{{ item.description }}
							</p>
  					</NuxtLink>
					</div>							
				</template>
			</div>
	</div>
</template>
