import axios from 'axios'

export const uploadImage = async (file) => {
  if (!file) return null
  try {
    const formData = new FormData()
    formData.append('upload_preset', 'e67xqewe')
    formData.append('api_key', '286635395429529')
    formData.append('file', file)
    const url = 'https://api.cloudinary.com/v1_1/qawtsumk/image/upload'
    const { data } = await axios.post(url, formData)
    console.log(data)
    return data.secure_url
  } catch (e) {
    console.error('Error uploading image')
    console.log(e)
    return null
  }
}
