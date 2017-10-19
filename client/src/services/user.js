import axios from 'axios'

export default {

  async login (data) {
    let response = await axios.post('/api/login', data)
    console.log(response)
  },

  async logout () {
    let response = await axios.get('/api/logout')
    console.log(response)
  },

  async addNewUser (data) {
    let response = await axios.post('/api/add_user', data)
    console.log(response)
  },

  async currentUser () {
    let response = await axios.get('/api/current_user')
    return response.data
  }
}
