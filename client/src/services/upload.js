import axios from '~/utils/axiosCustomize'

export const uploadImage = async (formData) => {
  const res = await axios.post(`/api/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return res
}
