import axios from '~/utils/axiosCustomize'

export const uploadImage = async (formData) => {
  console.log(formData.get('file'))
  const res = await axios.post(`/api/upload`, formData)
  return res
}
