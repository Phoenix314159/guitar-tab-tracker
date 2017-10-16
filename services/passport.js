const LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcryptjs'),
  verifyPassword = (submittedPassword, userPassword) => {
    return bcrypt.compareSync(submittedPassword, userPassword)
  };
module.exports = passport => {
  passport.serializeUser((user, done) => {
    console.log('yo')
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    console.log('man')
    done(null, user)
  })

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, username, password, done) => {
    let db = req.db,
      user = await db.read_username([username])
    user = user[0];
    console.log(user)
    if (!user){
      return done(null, false)
    }
    if (verifyPassword(password, user.password)) {
      console.log('pass')
      delete user.password
      return done(null, user)
    }
    console.log('yo man')
    return done(null, false)
  }))
}









