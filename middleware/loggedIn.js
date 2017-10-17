module.exports = {
  isLoggedIn: (req, res, next) => {
    const {user} = req
    if (user) {
      next()
    }
    res.redirect('/#!/login')
  }
}
