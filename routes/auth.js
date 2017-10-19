const authController = require('../controllers/authController'),
  failure = {failureRedirect: '/api/null'}

module.exports = (app, passport) => {

  app.post('/api/login', passport.authenticate('local', failure), authController.login)

  app.get('/api/null', authController.loginFailure)

  app.get('/api/logout', authController.logout)

  app.get('/api/clear_sessions', authController.clearSessions)

  app.get('/api/clear_cookie', authController.clearCookie)

}


