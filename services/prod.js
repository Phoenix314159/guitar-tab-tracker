module.exports = (app, express, config) => {
    const {proc} = config

    app.use(express.static(proc + '/build'));

    app.get('*', (req, res) => {
        res.sendFile(proc + '/build/index.html');
    })
}




