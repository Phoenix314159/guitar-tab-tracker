module.exports = app => {

  app.use('/api/get_all_users', (req, res, next) => {
    req.dbQuery = 'select * from users'
    next()
  })

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
    req.emailMessage = 'that email address is already used'
    req.checkField = (a, b, c, d, e) => {
      if (a && b && c && d && e) return false
      return true
    }
    req.invalidEmail = 'please enter a valid email address'
    req.passCheck =  `password must contain at least one letter, one number, a special character, 
                      be 8 to 20 characters long, and not start with a special character`
    req.dbQuery = `insert into users(firstname, lastname, email, username, password)
                   values($1, $2, $3, $4, $5)`
    next()
  })

  app.use('/api/delete_user', (req, res, next) => {
    req.message = 'user deleted'
    req.dbQuery = 'delete from users where id = $1'
    next()
  })

  app.use('/api/change_password', (req, res, next) => {
    req.message = 'password changed'
    req.dbQuery = 'update users set password = $1 where id = $2'
    next()
  })
}
