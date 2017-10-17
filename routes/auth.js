module.exports = (app, passport) => {

  app.post('/api/login',
    passport.authenticate('local', {failureRedirect: '/api/null'}), (req, res) => {
    const {user, message} = req
    return res.ok({user, message}) //if authentication is successful, message and user are sent
  })

  app.get('/api/null', (req, res) => {
    const message = 'invalid email address or password'
    return res.ok({message})
  })

  app.get('/api/logout', async (req, res) => {
    const message = 'you are logged out', {sessionStore, session: {id}} = req
    await sessionStore.destroy(id, err => { //deletes session record in db
      if (err) console.log(err)
      req.session.destroy(() => { // deletes session from express
        return res.ok({message})
      })
    })
  })

  app.get('/api/clean_sessions', async (req, res) => {
    const {db} = req, message = 'all sessions cleared from session table',
      session = await db.delete_all_sessions() //deletes all session records in db
    return res.ok({message, session})
  })
}


