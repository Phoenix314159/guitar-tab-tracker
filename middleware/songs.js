module.exports = app => {
  app.use('/api/get_songs', (req, res, next) => {
    req.dbQuery = 'select * from songs'
    next()
  })
  app.use('/api/add_song', (req, res, next) => {
    req.dbQuery = `insert into songs(artist, genre, album, albumImage, youtubeId, lyrics, tab)
                   values($1, $2, $3, $4, $5, $6, $7)`
    req.message = 'new song added'
    next()
  })
}


