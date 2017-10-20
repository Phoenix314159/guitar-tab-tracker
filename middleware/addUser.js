module.exports = app => {
  app.use('/api/add_user', (req, res, next) => {
    req.message = 'new user added'
    req.emailMessage = 'that email address is already used'
    req.checkField = (a, b, c, d, e) => {
      return !(a && b && c && d && e)
    }
    req.invalidEmail = 'please enter a valid email address'
    req.invalidFields = 'please fill out all fields'
    req.userMessage = 'username entered already exists'
    req.passCheck =  `password must contain at least one letter, one number, a special character, 
                      be 8 to 20 characters long, and not start with a special character`
    req.dbQuery = `insert into users(firstname, lastname, email, username, password)
                   values($1, $2, $3, $4, $5)`
    next()
  })
}
