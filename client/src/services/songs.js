import axios from 'axios'

export default {

  async getSongs () {
    const res = await axios.get('/api/songs')
    return res
  }
}
