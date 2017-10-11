const express = require('express'),
  path = require('path'),
  config = require('./config/dev'),
  app = module.exports = express(),
  massive = require('massive'),
  connectionString = config.massiveUri;

process.env.PWD = process.cwd()

require('./services/passport')
require('./middleware/middleware')(app)
require('./routes/users')(app)

//<------ production -------->
// app.use(express.static(path.join(process.env.PWD, '/client/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/client/dist/index.html'))
// })
//<-------------------------->

const connectToDB = async () => {
  let massiveInstance = await massive(connectionString);
  app.set('db', massiveInstance);
  app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
  })
};
connectToDB();

