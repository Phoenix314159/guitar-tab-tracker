const {hashSync, genSaltSync} = require('bcryptjs')

module.exports = password => hashSync(password, genSaltSync(10))
