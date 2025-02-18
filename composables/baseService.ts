const urlApi = 'https://ibuilder.ozonohosting.com/api'


const baseService = {    
	
	index(configName, params = {}) {
		return new Promise((resolve, reject) => {			
			if (!configName) return reject('Config name is required') //Validate config name			

			$fetch('/api/base', { 
				method: 'GET',
				params: {
					api:  `${urlApi}${configName}`, 
					...params
				}
			}).then(response => resolve(response)).catch(error => {
					reject(error)
			})
		})
	}

}


export default baseService;