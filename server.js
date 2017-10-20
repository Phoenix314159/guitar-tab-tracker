const express = require('express'),
  path = require('path'),
  passport = require('passport'),
  massive = require('massive'),
  {port, dbConnection} = require('./config/dev'),
  app = express();

(async () => { app.set('db', await massive(dbConnection)) })()

//<------ production -------->
// process.env.PWD = process.cwd()
// app.use(express.static(path.join(process.env.PWD, '/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/dist/index.html'))
// })
//<-------------------------->
require('./services/passport')(passport)
require('./middleware/main')(app, passport)
require('./routes/auth')(app, passport)
require('./routes/users')(app)
require('./middleware/serverError')(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


