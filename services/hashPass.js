const {hashSync, genSaltSync} = require('bcryptjs')

module.exports = password => {
  return hashSync(password, genSaltSync(10))
}
