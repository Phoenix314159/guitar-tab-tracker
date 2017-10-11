const passport = require('passport'),
  app = require('../server'),
  db = app.get('db'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = app => {

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

  app.post('/api/adduser', (req, res) => {
    req.body.password = hashPass(req.body.password)
    req.body.email = req.body.email.toLowerCase()
    db.add_new_user([req.body.firstname, req.body.lastname, req.body.email, req.body.username, req.body.password], (err, user) => {
      !err ? res.status(200).send(user) : res.status(500).send(err)
    })
  })
}
