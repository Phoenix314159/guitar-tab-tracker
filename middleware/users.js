module.exports = app => {
  app.use('/api/current_user', (req, res, next) => {
    req.message = 'you need to log in'
    next()
  })

  app.use('/api/get_user', (req, res, next) => {
    req.message = 'no user found'
    next()
  })

  app.use('/api/add_user', (req, res, next) => {
    req.message = 'new user added'
    next()
  })

  app.use('/api/delete_user', (req, res, next) => {
    req.message = 'user deleted'
    next()
  })

  app.use('/api/change_password', (req, res, next) => {
    req.message = 'password changed'
    next()
  })
}
