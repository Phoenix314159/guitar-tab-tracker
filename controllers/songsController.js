module.exports = {

  async getSongs(req, res) {
    const {dbQuery, db: {run}} = req, allSongs = await run(dbQuery); //array of all songs from songs table
    return res.ok({allSongs})
  },

  async addSong(req, res) {
    const {dbQuery, message, db: {run}, body: {artist, genre, album, albumImage, youtubeId, lyrics, tab}} = req,
      addSong = await run(dbQuery, [artist, genre, album, albumImage, youtubeId, lyrics, tab]);
    return res.ok({message, addSong}) //addsong will be an empty array
  },
}
