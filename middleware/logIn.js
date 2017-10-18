module.exports = app => {
  app.use('/api/login', (req, res, next) => {
    req.message = 'you are logged in'
    next()
  })

  app.use('/api/logout', (req, res, next) => {
    req.message = 'you are logged out'
    next()
  })

  app.use('/api/null', (req, res, next) => {
    req.message = 'invalid email address or password'
    next()
  })
}
