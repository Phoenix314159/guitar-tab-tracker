const bodyParser = require('body-parser'),
  session = require('express-session'),
  passport = require('passport'),
  cookieSession = require('cookie-session'),
  config = require('../config/dev'),
  pgSession = require('connect-pg-simple')(session),
  asyncMiddleWare = require('express-async-await') // error handling for async routes

module.exports = app => {
  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    next()
  })
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  asyncMiddleWare(app)
  // app.use(cookieSession({
  //   maxAge: config.cookieAge,
  //   keys: [config.cookieKey]
  // }))
  app.use(session({
    store: new pgSession({
      tableName: 'session',
      conString: config.massiveUri
    }),
    secret: config.cookieKey,
    resave: false,
    // rolling: true,
    saveUninitialized: true,
    cookie: {maxAge: config.cookieAge},
    secure : true
  }))
}
