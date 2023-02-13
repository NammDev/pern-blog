import axios from '~/utils/axiosCustomize'

export const postLogin = async (email, password) => {
  const res = await axios.post(`/api/auth/login`, {
    email,
    password,
  })
  return res
}

export const postRegister = async (email, username, password) => {
  const res = await axios.post(`/api/auth/register`, {
    email,
    username,
    password,
  })
  return res
}

export const postLogout = async (email, refresh_token) => {
  const res = await axios.post(`/logout`, {
    email,
    refresh_token,
  })
  return res
}

export const postRefreshToken = async (email, refresh_token) => {
  const res = await axios.post(`/refresh-token`, {
    email,
    refresh_token,
  })
  return res
}
