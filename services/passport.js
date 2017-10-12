const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcryptjs'),
  verifyPassword = (submittedPassword, userPassword) => {
    return bcrypt.compareSync(submittedPassword, userPassword)
  }

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  let db = req.db,
    user = await db.read_username([username]);
  user = user[0];
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

passport.deserializeUser((user, done) => {
  done(null, user)
})






