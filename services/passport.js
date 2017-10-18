const {Strategy} = require('passport-local'),
  {compareSync} = require('bcryptjs'),
  verifyPassword = (submittedPassword, savedPassword) => {
    return compareSync(submittedPassword, savedPassword)
  }

module.exports = passport => {

  passport.use('local', new Strategy({ //<--- local strategy
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    let {db} = req, [user] = await db.read_username([username.toLowerCase()])
    if (!user) return done(null, false)
    if (verifyPassword(password, user.password)) {
      delete user.password
      return done(null, user)
    }
    return done(null, false)
  }))

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser(async (req, user, done) => {
    const {db} = req, [foundUser] = await db.search_user_by_id([user.id])
    done(null, foundUser)
  })
}









