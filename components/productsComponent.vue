<template>
	<div>
		<div v-if="data">			
			<div class="gap-4">
				<template v-for="(item, index) in data.data">			
					<div>						
						<h5 class="mb-2 text-xl font-medium leading-tight">{{ item.title }}</h5>						
					</div>							
				</template>
			</div>
		</div>
	</div>
  </template>
  <script ste>
import { useMyPostsStore } from '../stores/posts'
 
const counterStore = useMyPostsStore();




	export default {
	  data() {
		return {
		  data: null
		}
	  },
	  
	  async beforeCreate() {
		//const { data }  = useNuxtData('products')
///		const data = await $fetch('https://ibuilder.ozonohosting.com/api/iblog/v1/posts')
		
	  },
	  async mounted() {
		//const data = await postsStore.getPosts()
		//console.log(data)
		//this.data = data
		
		//this.fetch()
	  },
	  methods: {
		async fetch() {
		/*
		const { data, status, error, refresh, clear } = await useAsyncData(
			'products',
			() => $fetch('https://ibuilder.ozonohosting.com/api/iblog/v1/posts').then(response => {
				console.log(response.data)
				return response
			})
		)
			*/
		//const { data } = await useFetch('https://ibuilder.ozonohosting.com/api/iblog/v1/posts', { key: 'products' })


		const data = await $fetch('https://ibuilder.ozonohosting.com/api/iblog/v1/posts')

		console.log(data)
		this.data = data

		/*		
		this.data = await fetch(
		  '/api/posts'
		).then(res => res.json())
		*/
		}

	  },	  
	}
  </script>