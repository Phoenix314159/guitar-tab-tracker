const log = require('../middleware/loggedIn'),
  auth = require('../middleware/auth'),
  checkField = require('../services/checkField'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = app => {

  app.get('/api/getallusers', async (req, res) => {
    let db = req.db,
      allUsers = await db.get_all_users()
    allUsers.map(user => { delete user['password'] })
    return res.ok({allUsers})
  })

  app.get('/api/current_user', auth.isAuthed, (req, res) => {
    let message = 'you need to log in'
    if (!req.user) return res.ok({message})
    delete req.user['password']
    return res.ok(req.user)
  })

  app.get('/api/get_user', async (req, res) => {
    let db = req.db,
      user = await db.get_user_by_id([req.query.id])
    user = user[0]
    delete user['password']
    return res.ok(user)
  })

  app.post('/api/add_user', async (req, res) => {
    let db = req.db, message = 'new user added', {firstname, lastname, email, username, password} = req.body
    if (checkField(firstname, lastname, email, username, password)) return res.badRequest('bad request')
    let user = await db.add_user([firstname, lastname, email.toLowerCase(), username, hashPass(password)])
    return res.created({message, user}) // if successful user will be an empty array
  })

  app.get('/api/delete_user', async (req, res) => {
    let db = req.db, message = 'user deleted',
      user = await db.delete_user([req.query.id])
    return res.ok({message, user})
  })
}
