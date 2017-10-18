module.exports = (app, passport) => {

  app.post('/api/login',
    passport.authenticate('local', {failureRedirect: '/api/null'}), (req, res) => {
      const {user, message} = req
    return res.ok({user, message}) //if authentication is successful, message and user are sent
  })

  app.get('/api/null', (req, res) => {
    const {message} = req  //if redirected here, middleware sets req.message
    return res.ok({message})
  })

  app.get('/api/logout', async (req, res) => {
    const {user, message, noLogin, sessionStore, session: {id}} = req
    if(!user) return res.ok(noLogin)
    await sessionStore.destroy(id, err => { //deletes session record in db
      if (err) console.log(err)
    })
    req.session.destroy() // deletes session from express
    return res.ok({message})
  })

  app.get('/api/clean_sessions', async (req, res) => {
    const {db} = req, message = 'all sessions cleared from session table',
      session = await db.delete_all_sessions() //deletes all session records in db
    return res.ok({message, session})
  })

  app.get('/clear', (req, res) => {
    res.clearCookie({path: '/'});
    res.ok('cookie gone')
  });
}


