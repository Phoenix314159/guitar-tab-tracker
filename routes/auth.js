module.exports = (app, passport) => {

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const {user} = req, message = 'you are logged in'
    return res.ok({user, message}) //if authentication is successful, message and user are sent
  })

  app.get('/api/logout', async (req, res) => {
    const message = 'you are logged out', {logout, sessionStore, session: {id} } = req
    await sessionStore.destroy(id, err => { //delete session record in db
      if (err) console.log(err)
      logout()
    })
    req.session.destroy()
    return res.ok({message})
  })

  app.get('/api/clean_sessions', async (req, res) => {
    const {db} = req, message = 'all sessions cleared from session table',
      session = await db.delete_all_sessions()
    return res.ok({message, session})
  })
}


