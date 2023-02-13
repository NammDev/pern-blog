import axios from 'axios'
import { postRefreshToken } from '~/services/auth'
import { getLocalAccessToken, getLocalRefreshToken, updateLocalAccessToken } from './token'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: { 'Content-type': 'application/json' },
})

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getLocalAccessToken()
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken // for Spring Boot back-end
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  async (err) => {
    // get config
    const originalConfig = err.config
    // If not login & get error
    if (originalConfig.url !== '/api/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          const data = await postRefreshToken(getLocalRefreshToken())
          updateLocalAccessToken(data.accessToken)
          return instance(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  }
)

export default instance
