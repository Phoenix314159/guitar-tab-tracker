module.exports = (app, passport) => {

  app.post('/api/login',
    passport.authenticate('local', {failureRedirect: '/api/null'}), (req, res) => {
      const {db, message, user, session} = req
      // await db.add_login_info([user.id, 1, session.id])
      return res.ok({message, user})
    })

  app.get('/api/null', (req, res) => {
    const {message} = req  //if redirected here, middleware sets req.message
    return res.ok({message})
  })

  app.get('/api/logout', async (req, res) => {
    const {user, message, noLogin, sessionStore, session: {id}} = req
    if (!user) return res.ok(noLogin)
    await sessionStore.destroy(id, err => { //deletes session record in db
      if (err) console.log(err)
    })
    req.session.destroy() // deletes session from express
    return res.ok({message})
  })

  app.get('/api/clean_sessions', async (req, res) => {
    const {message, db: {run}} = req,
      session = await run('delete from "session"') //deletes all session records in db
    return res.ok({message, session})
  })

  app.get('/clear', (req, res) => {
    res.clearCookie({path: '/'})
    res.ok('cookie gone')
  })
}


