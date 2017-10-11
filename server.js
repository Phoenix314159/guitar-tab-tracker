const express = require('express'),
    path = require('path'),
    config = require('./config/dev'),
    app = express();

process.env.PWD = process.cwd();

require('./middleware/middleware')(app);
require('./routes/authentication')(app);

//<------ production -------->
// app.use(express.static(path.join(process.env.PWD, '/client/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/client/dist/index.html'))
// })
//<-------------------------->


app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});