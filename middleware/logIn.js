module.exports = app => {
  app.use('/api/login', (req, res, next) => {
    req.message = 'you are logged in'
    if (req.count > 0) {
      req.count++
      next()
    }
    req.count = 0  // counts the number of times users log in
    next()
  })

  app.use('/api/logout', (req, res, next) => {
    req.message = 'you are logged out'
    req.noLogin = 'you must login first'
    next()
  })

  app.use('/api/null', (req, res, next) => {
    req.message = 'invalid email address or password'
    next()
  })
}
