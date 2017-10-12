const passport = require('passport'),
  config = require('../config/dev'),
  isAuthed = require('../middleware/auth'),
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

  app.get('/api/me', isAuthed.auth, (req, res) => {
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
    let db = req.db,
      user = await db.get_user([req.query.id])
    res.send(user)
  })

  app.post('/api/adduser', async (req, res) => {
    let db = req.db,
      newUser = await db.add_new_user([req.body.firstname, req.body.lastname, req.body.email.toLowerCase(), req.body.username, hashPass(req.body.password)]);
    try {
      res.status(200).send(newUser)
    }
    catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
}


