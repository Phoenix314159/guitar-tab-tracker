module.exports = app => {

  app.use('/api/login', (req, res, next) => {
    req.message = 'you are logged in'
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

  app.use('/api/clean_sessions', (req, res, next) => {
    req.message = 'all sessions cleared from session table'
    next()
  })
}
