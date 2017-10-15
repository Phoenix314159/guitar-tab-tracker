const bodyParser = require('body-parser'),
  session = require('express-session'),
  passport = require('passport'),
  config = require('../config/dev'),
  flash = require('connect-flash'),
  pgSession = require('connect-pg-simple')(session),
  asyncMiddleWare = require('express-async-await') // error handling for async routes

module.exports = app => {

  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    next()
  })
  app.use(bodyParser.json())
  app.use(flash())
  app.use(session({
    store: new pgSession({
      tableName: 'session',
      conString: config.massiveUri
    }),
    secret: config.cookieKey,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: config.cookieAge}
  }))

  app.use(passport.initialize())
  app.use(passport.session())
  asyncMiddleWare(app)
}
