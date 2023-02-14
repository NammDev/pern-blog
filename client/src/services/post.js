import axios from '~/utils/axiosCustomize'

export const getPosts = async (cat) => {
  const res = await axios.get(`/api/posts${cat}`)
  return res
}
