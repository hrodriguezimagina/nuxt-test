<template>
	<div>
		take {{ take }}
		<div v-if="data?.length">
			<button @click="decrement()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
				-1
			</button>
				  {{ data.length}}
			<button @click="increment()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				+1
			</button>
		</div>
		<div v-for="item in data">
			<div>						
			
			<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.id }} - {{ item.title }}</h5>
			<p v-html="item.description" class="mb-4 text-base">
			</p>  					
			</div>
		</div>	
		<hr />
		<button @click="getNewPosts()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
			get new data
		</button>
		
		<div v-for="item in newData">
			<div>						
			
			<h5 class="mb-2 text-xl font-medium leading-tight">new{{ item.id }} - {{ item.title }}</h5>
			<p v-html="item.description" class="mb-4 text-base">
			</p>  					
			</div>
		</div>	


	</div>
  </template>
  <script setup> 

	/*
	  base config
	*/
			
	const moduleName = 'iblog';
	const moduleVersion = 'v1';
	const urlBase = `/${moduleName}/${moduleVersion}`
	
	const apiRoutes = {
		posts: `${urlBase}/posts`
	}

	
	const data = ref([])
	const newData = ref([])
	const take = ref(10)

	
	function increment(){
		take.value++
		getPosts()		
	}

	function decrement(){
		take.value--
		getPosts()
	}

	async function getPosts(){		
		const params = {			
			page: 1,
			take: take.value				
		}
		
		baseService.index(apiRoutes.posts, params).then(response => {
			data.value = response?.data || []
		})

	}

	async function getNewPosts(){
		await baseService.get('https://ibuilder.ozonohosting.com/api/iblog/v1/posts').then(response => {
			newData.value = response.data
		})
	}

	onBeforeMount(async() => {
		getPosts()
	})
	onMounted(async () => {		
		console.log('mounted')
		getPosts()
	})
	  
  </script>