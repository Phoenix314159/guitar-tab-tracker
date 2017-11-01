module.exports = {

  login(req, res) {
    const {message, user} = req
    return res.ok({message, user})
  },

  loginFailure(req, res) {
    const {message} = req  //if redirected here, middleware sets req.message
    return res.ok({message})
  },

  async logout(req, res) {
    const {user, message, noLogin, sessionStore, session: {id}} = req
    if (!user) return res.ok(noLogin)
    await sessionStore.destroy(id, err => { if (err) console.log(err) });
    req.session.destroy() // deletes session from express
    return res.ok({message})
  },

  async clearSessions(req, res) {
    const {dbQuery, message, db: {run}} = req,
      session = await run(dbQuery); //deletes all session records in db
    return res.ok({message, session})
  },

  // clearCookie(req, res) {
  //   res.clearCookie({path: '/'})
  //   res.ok('cookie gone')
  // }
}

