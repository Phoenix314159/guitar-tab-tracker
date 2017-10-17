module.exports = {
  auth: (req, res, next) => {
    const auth = req.isAuthenticated()
    if (!auth) {
      return res.unauthorized('not authenticated')
    }
    next()
  }
}
