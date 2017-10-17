module.exports = {
  isAuthed: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.unauthorized('not authenticated')
    }
    next()
  }
}
