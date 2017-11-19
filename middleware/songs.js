module.exports = app => {
  app.use('/api/get_songs', (req, res, next) => {
    req.dbQuery = 'select * from songs'
    next()
  })
  app.use('/api/add_song', (req, res, next) => {
    req.dbQuery = `insert into songs(title, artist, genre, album, albumImage, youtubeId, lyrics, tab)
                   values($1, $2, $3, $4, $5, $6, $7, $8)`
    req.message = 'new song added'
    next()
  })
  app.use('/api/get_song_by_id', (req, res, next) => {
    req.dbQuery = 'select * from songs where id = $1'
    next()
  })
  app.use('/api/update_song', (req, res, next) => {
    req.dbQuery = `update songs set title = $1, artist = $2, genre = $3, album = $4, 
                   albumImage = $5, youtubeId = $6, lyrics = $7, tab = $8
                   where id = $9`
    next()
  })
}


