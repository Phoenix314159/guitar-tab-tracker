const express = require('express'),
    path = require('path'),
    config = require('./config/dev'),
    app = express();

process.env.PWD = process.cwd();

require('./middleware/middleware')(app);
require('./routes/authentication')(app);
// app.use('/', express.static(path.join(process.env.PWD, '/client')));


app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});