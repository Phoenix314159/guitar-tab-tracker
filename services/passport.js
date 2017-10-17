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
    const [foundUser] = await req.db.search_user_by_id([user.id])
    done(null, foundUser)
  })

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    const [user] = await req.db.read_username([username.toLowerCase()])
    if (!user) return done(null, false)
    if (verifyPassword(password, user.password)) {
      delete user.password
      return done(null, user)
    }
    return done(null, false)
  }))
}









