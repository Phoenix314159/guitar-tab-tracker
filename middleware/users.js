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
    req.dbQuery = `insert into users(firstname, lastname, email, username, password)
                   values($1, $2, $3, $4, $5)`
    next()
  })

  app.use('/api/delete_user', (req, res, next) => {
    req.message = 'user deleted'
    next()
  })

  app.use('/api/change_password', (req, res, next) => {
    req.message = 'password changed'
    req.dbQuery = 'update users set password = $1 where id = $2'
    next()
  })
}
