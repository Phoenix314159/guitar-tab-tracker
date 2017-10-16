const config = require('../config/dev'),
  loggedIn = require('../middleware/loggedIn'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = (app, passport) => {

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.send({message: 'you are logged in', user: req.user})
  })

  app.get('/api/logout', async (req, res) => {
    await req.sessionStore.destroy(req.session.id, err => {
      console.log(err)
    })
    res.status(200).send('you are logged out')
  })

  app.get('/api/current_user', (req, res) => {
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


