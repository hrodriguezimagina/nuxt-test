<template>
	<div>		
		<div v-for="item in data">
			<div>			
				<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.id }} - {{ item.title }}</h5>
				<p v-html="item.description" class="mb-4 text-base">
				</p>
			</div>
		</div>
	</div>
  </template>
  <script setup> 
	
	import apiRoutes from '../config/apiRoutes'	
	
	const data = ref([])
	
	async function getProducts(){
		console.time('products')
		baseService.index(apiRoutes.products).then(response => {
			data.value = response?.data || []
			console.timeEnd('products')
		})
	}
	
	onMounted(async () => {
		getProducts()
	})
	  
  </script>