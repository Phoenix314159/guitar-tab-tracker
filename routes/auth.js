const config = require('../config/dev');

module.exports = (app, passport) => {

  app.post('/api/auth/login', passport.authenticate('local'), (req, res) => {
    let user = req.user, message = 'you are logged in'
    return res.status(200).send({user, message})
  })

  app.get('/api/logout', async (req, res) => {
    let message = 'you are logged out'
    await req.sessionStore.destroy(req.session.id, err => { //delete session record in db
      if (err) console.log(err)
      req.logout()
    })
    req.session.destroy()
    return res.status(200).send({message})
  })
}


