import axios from 'axios'

export default {
  login: async data => {
    let response = await axios.post('/api/auth/login', data)
    console.log(response)
  },
  logout: async () => {
    let response = await axios.get('/api/logout')
    console.log(response)
  },
  addNewUser: async data => {
    let response = await axios.post('/api/adduser', data)
    console.log(response.data.message)
  },
  currentUser: async () => {
    let response = await axios.get('/api/current_user')
    return response.data
  }
}
