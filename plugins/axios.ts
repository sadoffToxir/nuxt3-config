import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const domain = 'https://swapi.dev/api/'

  let publicApi = axios.create({
    baseURL: domain,
    headers: {
      common: {
        // Authorization: `Basic ${encodedToken}`
      }
    }
  })

  return {
    provide: {
      publicApi: publicApi
    }
  }
})