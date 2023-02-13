import axios from '~/utils/axiosCustomize'

export const postLogin = async (email, password) => {
  const res = await axios.post(`/api/auth/login`, {
    email,
    password,
  })
  return res
}
