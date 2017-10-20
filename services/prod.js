module.exports = (app, express, config) => {
    const {dirname} = config

    app.use(express.static(dirname + '/build'));

    app.get('*', (req, res) => {
        res.sendFile(proc + '/build/index.html');
    })
}




