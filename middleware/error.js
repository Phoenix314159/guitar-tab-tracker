module.exports = app => {
  app.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send('bad request')
  })
}


