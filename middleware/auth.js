module.exports = {
  auth: (req, res, next) => {
    const auth = req.isAuthenticated()
    if (!auth) {
      return res.status(401).send('not authenticated')
    }
    next()
  }
}
