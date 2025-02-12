<script setup lang="ts">
	const {status, data: products} = await useLazyFetch('/api/products')
	/*
	const products = await $fetch('https://fakestoreapi.com/products')
	const status = true
	*/
</script>

<template>
	<div>		
		<h1>Products list</h1>
		<div v-if="status === 'pending'">
    	Loading ...
  	</div>
		<div v-else>
			<div class="grid grid-cols-4 gap-4">
				<template v-for="(item, index) in products">			
					<div>
						<img class="w-[250px] rounded-b-md" :src="item.image">
						<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.title }}</h5>
						<p class="mb-4 text-base">
							{{ item.description }}
						</p>
					</div>							
				</template>
			</div>
		</div>
	</div>
</template>
