const config = require('../config/dev'),
  isAuthed = require('../middleware/auth'),
  loggedIn = require('../middleware/loggedIn'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = (app, passport) => {

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/user',
    failureRedirect: '/api/null',
    failureFlash: true
  }),  function(req, res) {
    console.log('kjahgwodejhg',req.user);
    req.session.user = req.user;
  })

  app.get('/api/user', async (req, res) => {
    return res.status(200).send({message: 'You are logged In!', user: req.user})
  })

  app.get('/api/null', (req, res) => {
    return res.status(200).send({message: 'Invalid username or password'})
  })

  app.get('/api/logout', async (req, res) => {
    req.logout()
    req.session.destroy()
    await req.sessionStore.destroy(req.sessionID, err => {
      console.log(err)
    })
    console.log(req.session)
    return res.status(200).send('logged out')
  })

  app.get('/api/current_user', (req, res) => {
    console.log(req.user)
    return res.send(req.user)
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
    return res.status(200).send({message: 'new user added', user: response})
  })
}


