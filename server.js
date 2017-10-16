const express = require('express'),
  path = require('path'),
  passport = require('passport'),
  {serverPort, connectionString} = require('./config/dev'),
  app = express(),
  massive = require('massive');

(async () => { app.set('db', await massive(connectionString)) })()
//<------ production -------->
// process.env.PWD = process.cwd()
// app.use(express.static(path.join(process.env.PWD, '/client/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/client/dist/index.html'))
// })
//<-------------------------->
require('./services/passport')(passport)
require('./middleware/main')(app)
require('./middleware/passport')(app, passport)
require('./routes/auth')(app, passport)
require('./routes/users')(app)
require('./middleware/error')(app)

app.listen(serverPort, () => {
  console.log(`listening on port ${serverPort}`)
})


