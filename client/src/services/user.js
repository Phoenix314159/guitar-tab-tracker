import axios from 'axios'

export default {
  login: async data => {
    let response = await axios.post('/api/login', data)
    console.log(response)
  },
  logout: async () => {
    let response = await axios.get('/api/logout')
    console.log(response)
  },
  addNewUser: async data => {
    let response = await axios.post('/api/add_user', data)
    console.log(response)
  },
  currentUser: async () => {
    let response = await axios.get('/api/current_user')
    return response.data
  }
}
