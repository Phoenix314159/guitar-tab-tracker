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
  }, async (req, usernameEntered, passwordEntered, done) => {
    const {db: {users}} = req, username = usernameEntered.toLowerCase(),
      [user] = await users.find({username}), {password} = user
    if (!user) return done(null, false)
    if (verifyPassword(passwordEntered, password)) {
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
      foundUser = await users.findOne({id})
    done(null, foundUser)
  })
}









