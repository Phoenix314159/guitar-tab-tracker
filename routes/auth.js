module.exports = (app, passport) => {

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    let user = req.user, message = 'you are logged in'
    return res.ok({user, message})
  })

  app.get('/api/logout', async (req, res) => {
    let message = 'you are logged out'
    await req.sessionStore.destroy(req.session.id, err => { //delete session record in db
      if (err) console.log(err)
      req.logout()
    })
    req.session.destroy()
    return res.ok({message})
  })

  app.get('/api/clean_sessions', async (req, res) => {
    let db = req.db, message = 'all sessions cleared from session table',
    session = await db.delete_all_sessions()
    res.ok({message, session})
  })
}


