import axios from 'axios'

export default {

  async login (data) {
    const res = await axios.post('/api/login', data)
    console.log(res.data.message)
    return res.data.message
  },

  async logout () {
    let res = await axios.get('/api/logout')
    console.log(res.data.message)
    return res
  },

  async addNewUser (data) {
    const res = await axios.post('/api/add_user', data)
    console.log(res)
  },

  async currentUser () {
    const res = await axios.get('/api/current_user')
    console.log(res)
    return res.data
  }
}
