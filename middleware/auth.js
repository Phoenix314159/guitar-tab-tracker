module.exports = {
  auth: async (req, res, next) => {
    const auth = await req.isAuthenticated()
    if (!auth) {
      return res.status(401).send('not authenticated')
    }
    next()
  }
}
