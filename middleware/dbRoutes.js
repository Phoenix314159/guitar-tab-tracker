module.exports = app => {
  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    next()
  })
}
