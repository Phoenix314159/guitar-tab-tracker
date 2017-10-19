import axios from 'axios'

export default {

  async login (data) {
    const response = await axios.post('/api/login', data)
    console.log(response)
  },

  async logout () {
    let response = await axios.get('/api/logout')
    console.log(response)
    return response
  },

  async addNewUser (data) {
    const response = await axios.post('/api/add_user', data)
    console.log(response)
  },

  async currentUser () {
    const response = await axios.get('/api/current_user')
    return response.data
  }
}
