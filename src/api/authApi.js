// https://firebase.google.com/docs/reference/rest/database <- Firebase Rest Api Documentation
import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts/',
  params: {
    key: 'AIzaSyD09-K-XnXsBBlYTFHKPD6an1vNpS1-pdo'
  }
})

export default authApi
