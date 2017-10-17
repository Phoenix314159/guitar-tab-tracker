const LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcryptjs'),
  verifyPassword = (submittedPassword, savedPassword) => {
    return bcrypt.compareSync(submittedPassword, savedPassword)
  }

module.exports = passport => {

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser(async (req, user, done) => {
    const {db} = req, [foundUser] = await db.search_user_by_id([user.id])
    done(null, foundUser)
  })

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    const {db} = req, [user] = await db.read_username([username.toLowerCase()])
    if (!user) return done(null, false)
    if (verifyPassword(password, user.password)) {
      delete user.password
      req.message = 'you are logged in'
      return done(null, user)
    }
    return done(null, false)
  }))
}









