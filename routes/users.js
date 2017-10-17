const log = require('../middleware/loggedIn'),
  auth = require('../middleware/auth'),
  checkField = require('../services/checkField'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }

module.exports = app => {

  app.get('/api/get_all_users', async (req, res) => {
    const {db} = req, allUsers = await db.get_all_users() //array of all users from users table
    allUsers.map(user => { delete user['password'] }) // iterate over array to delete every hashed password
    return res.ok({allUsers})
  })

  app.get('/api/current_user', auth.isAuthed, (req, res) => {
    const {user} = req, message = 'you need to log in'
    if (!user) return res.ok({message}) // if user is null, a login is needed
    delete user['password'] //don't need to send back hashed password
    return res.ok({user})
  })

  app.get('/api/get_user', async (req, res) => {
    const {db} = req, {id} = req.query, message = 'no user found',
      [user] = await db.get_user_by_id([id])
    if(!user) return res.notFound({message})
    delete user['password']
    return res.ok({user})
  })

  app.post('/api/add_user', async (req, res) => {
    const {db} = req, message = 'new user added', {firstname, lastname, email, username, password} = req.body
    if (checkField(firstname, lastname, email, username, password)) { //check for null values entered
      return res.badRequest('bad request')
    }
    const user = await db.add_user([firstname, lastname, email, username.toLowerCase(), hashPass(password)])
    return res.created({message, user}) // if successful user will be an empty array
  })

  app.get('/api/delete_user', async (req, res) => {
    const {db} = req, {id} = req.query, message = 'user deleted',
      user = await db.delete_user([id])
    return res.ok({message, user}) // if successful user will be an empty array
  })
}
