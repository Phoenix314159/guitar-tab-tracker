const usersController = require('../controllers/usersController'),
  log = require('../middleware/loggedIn'),
  auth = require('../middleware/auth'),
  songsController = require('../controllers/songsController')

module.exports = app => {

  app.get('/api/get_all_users', usersController.getAllUsers)

  app.get('/api/current_user', auth.isAuthed, usersController.currentUser)

  app.get('/api/get_user', usersController.getUser)

  app.post('/api/add_user', usersController.addNewUser)

  app.get('/api/delete_user', usersController.deleteUser)

  app.post('/api/change_password', auth.isAuthed, usersController.changePass)

  app.get('/api/songs', songsController.getSongs)

  app.post('/api/add_song', songsController.addSong)

}
