module.exports = {
  isAuthed: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.ok('not authenticated')
    }
    next()
  }
}
