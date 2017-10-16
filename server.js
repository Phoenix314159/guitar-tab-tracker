const express = require('express'),
  path = require('path'),
  passport = require('passport'),
  config = require('./config/dev'),
  app = express(),
  massive = require('massive'),
  connectionString = config.massiveUri;

(async () => { app.set('db', await massive(connectionString)) })()
//<------ production -------->
// process.env.PWD = process.cwd()
// app.use(express.static(path.join(process.env.PWD, '/client/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/client/dist/index.html'))
// })
//<-------------------------->

require('./middleware/main')(app)
require('./services/passport')(passport)
require('./middleware/passport')(app, passport)
require('./routes/users')(app, passport)
require('./middleware/error')(app)

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})


