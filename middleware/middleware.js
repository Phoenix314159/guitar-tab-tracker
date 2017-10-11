const bodyParser = require('body-parser'),
  cookieSession = require('cookie-session'),
  passport = require('passport'),
  config = require('../config/dev')

module.exports = app => {
  app.use(
    cookieSession({
      maxAge: config.cookieAge,
      keys: [config.cookieKey]
    })
  )
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(passport.session())

}
