const bodyParser = require('body-parser'),
  cookieSession = require('cookie-session'),
  passport = require('passport'),
  config = require('../config/dev'),
  flash = require('connect-flash'),
  asyncMiddleWare = require('express-async-await'); // error handling for async routes

module.exports = app => {

  app.use(cookieSession({
    maxAge: config.cookieAge,
    keys: [config.cookieKey]
  }))

  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    next()
  })

  app.use(bodyParser.json())
  app.use(flash())
  app.use(passport.initialize())
  app.use(passport.session())

  asyncMiddleWare(app)
}