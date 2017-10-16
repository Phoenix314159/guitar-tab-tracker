const loggedIn = require('../middleware/loggedIn'),
  isAuthed = require('../middleware/auth'),
  bcrypt = require('bcryptjs'),
  hashPass = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  };

module.exports = app => {

  app.get('/api/getallusers', async (req, res) => {
    let db = req.db,
      allUsers = await db.get_all_users();
    allUsers.map(user => { delete user['password'] })
    return res.status(200).send({allUsers})
  })
  app.get('/api/current_user', (req, res) => {
    let message = 'you need to log in'
    if (!req.user) {
      return res.status(200).send({message})
    }
    delete req.user['password']
    return res.status(200).send(req.user)
  })

  app.get('/api/getuser', async (req, res) => {
    let db = req.db,
      user = await db.get_user([req.query.id])
    return res.status(200).send(user)
  })

  app.post('/api/adduser', async (req, res) => {
    let db = req.db, message = 'new user added',
      newUser = [req.body.firstname, req.body.lastname, req.body.email.toLowerCase(), req.body.username, hashPass(req.body.password)],
      user = await db.add_new_user(newUser) // if successful user will be an empty array
    return res.status(200).send({message, user})
  })
}
