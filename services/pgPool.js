const pg = require('pg'),
  {user, password, host, database, port, max, idleTimeoutMillis} = require('../config/dev');

module.exports = new pg.Pool({user, password, host, database, port, max, idleTimeoutMillis})
