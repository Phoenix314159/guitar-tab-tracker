module.exports = {

  async getSongs(req, res) {
    const {searchQuery, dbQuery, query, db: {run}} = req
    if(query.search) {
      const {search} = query
      const searchedSong = await run(searchQuery, [search]);
      return res.ok({searchedSong})
    } else {
      const allSongs = await run(dbQuery); //array of all songs from songs table
      return res.ok({allSongs})
    }
  },

  async addSong(req, res) {
    const {dbQuery, message, db: {run}, body: {title, artist, genre, album, albumImage, youtubeId, lyrics, tab}} = req,
      addSong = await run(dbQuery, [title, artist, genre, album, albumImage, youtubeId, lyrics, tab]);
    return res.ok({message, addSong}) //addsong will be an empty array
  },

  async getSongById(req, res) {
    const {dbQuery, query: {id}, db: {run}} = req, song = await run(dbQuery, [id]);
    return res.ok({song})
  },

  async updateSong(req, res) {
    const {dbQuery, body: {title, artist, genre, album, albumImage, youtubeId, lyrics, tab},
    db: {run}, query: {songId}} = req,
      song = await run(dbQuery, [title, artist, genre, album, albumImage, youtubeId, lyrics, tab, songId]);
    return res.ok({song})
  }
}
