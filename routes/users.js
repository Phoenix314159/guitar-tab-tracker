const log = require('../middleware/loggedIn'),
  auth = require('../middleware/auth'),
  checkField = require('../services/checkField'),
  {hashSync, genSaltSync} = require('bcryptjs'),
  hashPass = password => {
    return hashSync(password, genSaltSync(10))
  }

module.exports = app => {

  app.get('/api/get_all_users', async (req, res) => {
    const {db: {run}} = req, allUsers = await run('select * from users'); //array of all users from users table
    allUsers.map(user => { delete user['password'] }) // iterate over array to delete every hashed password
    return res.ok({allUsers})
  })

  app.get('/api/current_user', (req, res) => {
    const {user, message} = req
    if (!user) return res.ok({message}) // if user is null or undefined, a login is needed
    delete user['password'] //don't need to send back hashed password
    return res.ok({user})
  })

  app.get('/api/get_user', async (req, res) => {
    const {message, db: {users}, query: {id}} = req,
      [user] = await users.findOne({id});
    if(!user) return res.notFound({message})
    delete user['password']
    return res.ok({user})
  })

  app.post('/api/add_user', async (req, res) => {
    const {dbQuery, message, db: {run}, body: {firstname, lastname, email, username, password}} = req
    if (checkField(firstname, lastname, email, username, password)) { //check for null or undefined values entered
      return res.badRequest('bad request')
    }
    const user = await run(dbQuery, [firstname, lastname, email, username.toLowerCase(), hashPass(password)]);
    return res.ok({message, user}) // if successful user will be an empty array
  })

  app.get('/api/delete_user', async (req, res) => {
    const {message, db: {run}, query: {id}} = req,
      user = await run('delete from users where id = $1',[id]);
    return res.ok({message, user}) // if successful user will be an empty array
  })

  app.post('/api/change_password', auth.isAuthed, async (req, res) => {
    const {dbQuery, message, db: {run}, user: {id}, body: {password}} = req, newPassword = hashPass(password)
    await run(dbQuery, [newPassword, id]);
    res.ok({message})  //update old hashed password in db to new one
  })
}
