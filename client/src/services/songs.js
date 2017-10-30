import axios from 'axios'

export default {

  async getSongs () {
    const res = await axios.get('/api/get_songs')
    return res.data
  },
  async addSong (song) {
    const res = await axios.post('/api/add_song', song)
    return res
  },
  async show (songId) {
    const res = await axios.get(`/api/get_song_by_id?id=${songId}`)
    return res
  }

}
