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
    successFlash: 'You are logged in!',
    failureFlash: 'Invalid username or password.'
  }))

  app.get('/api/user', isAuthed.auth, async (req, res) => {
    let success = req.flash().success[0], db = req.db;
    console.log(req.session)
    res.status(200).send({message: success, user: req.user})
  })

  app.get('/api/null', (req, res) => {
    let error = req.flash().error[0]
    res.status(200).send({message: error})
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.status(200).send('logged out')
  })

  app.get('/api/getuser', async (req, res) => {
    let db = req.db,
      user = await db.get_user([req.query.id])
    res.status(200).send(user)
  })

  app.post('/api/adduser', async (req, res) => {
    let db = req.db,
      newUser = [req.body.firstname, req.body.lastname, req.body.email.toLowerCase(), req.body.username, hashPass(req.body.password)],
      response = await db.add_new_user(newUser) // if successful response will be an empty array
    res.status(200).send({message: 'new user added', user: response})
  })
}


