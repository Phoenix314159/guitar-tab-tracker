const passport = require('passport'),
  server = require('../server'),
  config = require('../config/dev'),
  bcrypt = require('bcryptjs'),
  massive = require('massive'),
  connectionString = config.massiveUri,
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = async app => {

  server.set('db', await massive(connectionString))
  const db = server.get('db')

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/me',
    failureRedirect: '/#!/login',
    failureFlash: true
  }))

  app.get('/api/me', (req, res) => {
    try {
      res.status(200).send(req.user)
    }
    catch (err) {
      console.log(err)
      res.status(500).send('an error occurred')
    }
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/getuser', async (req, res) => {
    const user = await db.get_user()
    res.send(user)
  })

  app.post('/api/adduser', async (req, res) => {
    let fName = req.body.firstname,
      lName = req.body.lastname,
      email = req.body.email.toLowerCase(),
      uName = req.body.username,
      pass = hashPass(req.body.password),
      newUser = await db.add_new_user([fName, lName, email, uName, pass])
    try {
      res.status(200).send(newUser)
    }
    catch (err) {
      console.log(err)
      re.status(500).send(err)
    }
  })
}


