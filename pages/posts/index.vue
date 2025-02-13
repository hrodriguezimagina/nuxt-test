<script setup lang="ts">

// We can access same data later using 'posts' key
//const { data: posts } = useNuxtData('posts')
let items = []
const { data: posts } = useNuxtData('posts')
if(posts.value){
	console.log(posts)
	items = posts
} else {
	const { data } = await useFetch('/api/posts', { key: 'posts' })
	console.log(data)
	items = data
}



</script>

<template>
	<div>		
		<h1>Products list</h1>
			<div class="grid grid-cols-4 gap-4">
				<template v-for="(item, index) in items">			
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
