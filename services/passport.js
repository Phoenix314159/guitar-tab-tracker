const {Strategy} = require('passport-local'),
  {compareSync} = require('bcryptjs'),
  verifyPassword = (passwordEntered, savedPassword) => {
    return compareSync(passwordEntered, savedPassword)
  }

module.exports = passport => {

  passport.use('local', new Strategy({ //<--- local strategy
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, usernameEntered, passwordEntered, done) => {
    const {db: {users}} = req, username = usernameEntered.toLowerCase(),
      [user] = await users.find({username}); //<-- semicolon required for successful users.find call
    if (!user) return done(null, false)
    if (verifyPassword(passwordEntered, user.password)) {
      delete user.password
      return done(null, user)
    }
    return done(null, false)
  }))

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser(async (req, user, done) => {
    const {db: {users}} = req, {id} = user,
      foundUser = await users.findOne({id});
    done(null, foundUser)
  })
}









