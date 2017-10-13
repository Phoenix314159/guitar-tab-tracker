import axios from 'axios'

export default {
  login: data => {
    axios.post('/api/login', data)
  },
  addNewUser: data => {
    axios.post('/api/adduser', data)
  }
}
