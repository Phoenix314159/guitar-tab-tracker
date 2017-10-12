module.exports = app => {
  app.get('/api/getallusers', (req, res) => {
    console.log('cool dude', req.app.get)
  })
}
