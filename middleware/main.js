const pg = require('pg'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  passport = require('passport'),
  config = require('../config/dev'),
  pgSession = require('connect-pg-simple')(session),
  asyncMiddleWare = require('express-async-await'), // error handling for async routes
  pgPool = new pg.Pool({
    user: config.user,
    password: config.pass,
    host: config.host,
    database: config.database,
    port: config.dbPort,
    max: 10,
    idleTimeoutMillis: 100000
  })

module.exports = app => {

  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    next()
  })
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  asyncMiddleWare(app)
  app.use(session({
    store: new pgSession({
      pool: pgPool
    }),
    secret: config.cookieKey,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: config.cookieAge},
    secure: true
  }))
}
