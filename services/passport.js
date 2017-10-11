const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcryptjs'),
  app = require('../server'),
  db = app.get('db');

const verifyPassword = (submittedPassword, userPassword) => {
  return bcrypt.compareSync(submittedPassword, userPassword)
}

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, (username, password, done) => {
  username = username.toLowerCase()
  db.read_username([username], (err, user) => {
    user = user[0]
    if (err) done(err)
    if (!user) return done(null, false)
    if (verifyPassword(password, user.password)) {
      delete user.password
      return done(null, user)
    }
    return done(null, false)
  })
}))




