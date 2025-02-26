const baseService = {
	
	/**
   * Get items by params
   * @param configName
   * @param params {params : {}, remember: boolean}
   * @returns {Promise<any>}
   */	
	index(configName, params = {}) {
		return new Promise((resolve, reject) => {			
			if (!configName) return reject('Config name is required') //Validate config name
			if(!params?.page) params.page = 1
			if(!params?.take) params.take = 10			


			$fetch('/api/base', { 
				method: 'GET',
				params: {
					api:  `${config.apiUrl}${configName}`,
					...params
				}
			}).then(response => resolve(response)).catch(error => {
					reject(error)
			})
		})
	}, 


	/**
   * Get Method
   * @param apiUrl external api, no cache
   * @param params {params : {}}
   * @returns {Promise<any>}
	 */

	get(apiUrl, params = {}) {
		return new Promise((resolve, reject) => {
			if (!apiUrl) return reject('apiUrl is required') //Validate config name

			$fetch(apiUrl, { 
				method: 'GET',
				params
			}).then(response => resolve(response)).catch(error => {
				reject(error)
			})
		})

	}



}


export default baseService;