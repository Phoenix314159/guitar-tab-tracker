import axios from 'axios'

export default {
  register: credentials => {
    axios.post('/api/register', credentials)
  }
}
