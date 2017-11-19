import axios from 'axios'

export default {

  async login (data) {
    const res = await axios.post('/api/login', data)
    return res.data
  },

  async logout () {
    let res = await axios.get('/api/logout')
    return res
  },

  async addNewUser (data) {
    const res = await axios.post('/api/add_user', data)
    return res.data
  },

  async currentUser () {
    const res = await axios.get('/api/current_user')
    console.log(res)
    return res.data
  }
}
