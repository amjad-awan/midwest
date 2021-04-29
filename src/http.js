import axios from 'axios'
// create a new axios instance
const instance = axios.create({
  baseURL: 'https://21aa56a6b44f.ngrok.io/api'
})

instance.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  console.log(response)
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance
