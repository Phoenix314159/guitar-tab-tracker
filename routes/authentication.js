module.exports = app => {

    app.post('/api/register', (req, res) => {
        console.log(req.body);
        res.send('cool')
    })
}
