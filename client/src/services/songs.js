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
  },

  async saveSong (song) {
    const {songId} = song
    const res = await axios.put(`/api/update_song?songId=${songId}`, song)
    return res
  }

}
