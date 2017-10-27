const bodyParser = require('body-parser'),
  session = require('express-session'),
  {cookie: {cookieKey, maxAge}} = require('../config/dev'),
  logIn = require('./logIn'),
  addUser = require('./addUser'),
  users = require('./users'),
  songs = require('./songs'),
  resStatus = require('express-res-status'),
  dbRoutesMiddleWare = require('./dbRoutes'),
  pgSession = require('connect-pg-simple')(session),
  pool = require('../services/pgPool'),
  asyncMiddleWare = require('express-async-await') // error handling for async routes

module.exports = (app, passport) => {

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(resStatus())
  app.use(session({
    store: new pgSession({pool}),
    secret: cookieKey,
    rolling: false,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge},
    secure: true,
  }))
  dbRoutesMiddleWare(app)
  asyncMiddleWare(app)
  logIn(app)
  addUser(app)
  users(app)
  songs(app)
  app.use(passport.initialize())
  app.use(passport.session())
}
