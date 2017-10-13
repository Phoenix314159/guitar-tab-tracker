const passport = require('passport'),
  config = require('../config/dev'),
  isAuthed = require('../middleware/auth'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = app => {

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/user',
    failureRedirect: '/api/null',
    failureFlash: true
  }))

  app.get('/api/user', isAuthed.auth, (req, res) => {
    res.status(200).send(req.user)
  })

  app.get('/api/null', (req, res) => {
    res.status(404).send('User Not Found')
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.status(200).send('logged out')
  })

  app.get('/api/getuser', async (req, res) => {
    let db = req.db,
      user = await db.get_user([req.query.id])
    res.send(user)
  })

  app.post('/api/adduser', async (req, res) => {
    let db = req.db,
      newUser = await db.add_new_user([req.body.firstname, req.body.lastname,
        req.body.email.toLowerCase(), req.body.username, hashPass(req.body.password)])
    res.status(200).send(newUser)
  })
}


