module.exports = {
  isLoggedIn: (req, res, next) => {
    console.log('yo man')
    if (req.user) {
      next()
    } else {
      res.redirect('/#!/login')
    }
  }
}
