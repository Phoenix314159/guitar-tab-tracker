import axios from 'axios'

export default {

  async getSongs () {
    const res = await axios.get('/api/get_songs')
    return res.data
  },
  async addSong (song) {
    const res = await axios.post('/api/add_song', song)
    return res
  }
}
