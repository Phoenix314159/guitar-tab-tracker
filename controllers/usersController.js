const checkField = require('../services/checkField'),
  {hashSync, genSaltSync} = require('bcryptjs'),
  hashPass = password => {
    return hashSync(password, genSaltSync(10))
  }

module.exports = {

  async getAllUsers(req, res) {
    const {dbQuery, db: {run}} = req, allUsers = await run(dbQuery); //array of all users from users table
    allUsers.map(user => { delete user['password'] }) // iterate over array to delete every hashed password
    return res.ok({allUsers})
  },

  currentUser(req, res) {
    const {user, message} = req
    if (!user) return res.ok({message}) // if user is null or undefined, a login is needed
    delete user['password'] //don't need to send back hashed password
    return res.ok({user})
  },

  async getUser(req, res) {
    const {message, db: {users}, query: {id}} = req, [user] = await users.findOne({id});
    if (!user) return res.notFound({message})
    delete user['password']
    return res.ok({user})
  },

  async addNewUser(req, res) {
    const {dbQuery, message, emailMessage, db: {run, users}, 
      body: {firstname, lastname, email, username, password}} = req
    if (checkField(firstname, lastname, email, username, password)) { //check for null or undefined values entered
      return res.badRequest('bad request')
    }
    const [User] = await users.find({email}); //find user with entered email address
    if(User.email === email) return res.ok(emailMessage)
    const user = await run(dbQuery, [firstname, lastname, email, username.toLowerCase(), hashPass(password)]);
    return res.ok({message, user}) // if successful user will be an empty array
  },

  async deleteUser(req, res) {
    const {dbQuery, message, db: {run}, query: {id}} = req,
      user = await run(dbQuery, [id]);
    return res.ok({message, user}) // if successful user will be an empty array
  },

  async changePass(req, res) {
    const {dbQuery, message, db: {run}, user: {id}, body: {password}} = req, newPassword = hashPass(password)
    await run(dbQuery, [newPassword, id]);
    res.ok({message})  //update old hashed password in db to new one
  }
}