const express = require('express'),
  path = require('path'),
  passport = require('passport'),
  massive = require('massive'),
  config = require('./config/config'),
  {port, dbConnection} = config,
  app = express();

(async () => { app.set('db', await massive(dbConnection)) })()

if(process.env.NODE_ENV === 'production') {
  require('./services/prod')(app, express, config);
}
require('./services/passport')(passport)
require('./middleware/main')(app, passport)
require('./routes/auth')(app, passport)
require('./routes/users')(app)
require('./middleware/serverError')(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


