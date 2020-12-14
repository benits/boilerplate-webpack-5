import axios from 'axios'

const api = axios.create({
  baseURL: 'localhost:3333',
  headers: {
    contentType: 'application/json;charset=utf-8'
  }
})

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
  const storagedToken = localStorage.getItem('@ECauth:token')
  config.headers.Authorization = storagedToken ? `Bearer ${storagedToken}` : ''
  return config
})

export default api
