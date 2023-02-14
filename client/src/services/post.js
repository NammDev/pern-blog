import axios from '~/utils/axiosCustomize'

export const getPosts = async (cat) => {
  const res = await axios.get(`/api/posts${cat}`)
  return res
}

export const getPost = async (id) => {
  const res = await axios.get(`/api/posts/${id}`)
  return res
}

export const deletePost = async (id) => {
  const res = await axios.delete(`/api/posts/${id}`)
  return res
}
