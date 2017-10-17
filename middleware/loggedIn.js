module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.user) {
      next()
    }
    res.redirect('/#!/login')
  }
}
