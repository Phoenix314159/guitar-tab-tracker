import axios from 'axios'

export default {
  login: async data => {
    let response = await axios.post('/api/login', data)
    console.log(response)
  },
  addNewUser: async data => {
    let response = await axios.post('/api/adduser', data)
    console.log(response)
  }
}
