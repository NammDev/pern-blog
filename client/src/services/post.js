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

export const createPost = async (title, desc, cat, img, date) => {
  const res = await axios.post(`/api/posts`, { title, desc, cat, img, date })
  return res
}

export const updatePost = async (title, desc, cat, img, id) => {
  const res = await axios.put(`/api/posts/${id}`, { title, desc, cat, img })
  return res
}
