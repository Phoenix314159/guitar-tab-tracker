const bodyParser = require('body-parser'),
  session = require('express-session'),
  {cookieKey, maxAge} = require('../config/dev'),
  dbRoutes = require('./dbRoutes'),
  pgSession = require('connect-pg-simple')(session),
  pool = require('../services/pgPool'),
  asyncMiddleWare = require('express-async-await'); // error handling for async routes

module.exports = app => {

  dbRoutes(app)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  asyncMiddleWare(app)
  app.use(session({
    store: new pgSession({pool}),
    secret: cookieKey,
    rolling: false,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge},
    secure: true
  }))
}
