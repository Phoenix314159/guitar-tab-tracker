process.env.PWD = process.cwd();

module.exports = {
  dirname: process.env.PWD,
  port: process.env.PORT,
  cookie: {
    cookieKey: process.env.COOKIE_KEY,
    maxAge: process.env,MAX_AGE
  },
  dbConnection: {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    max: process.env.POOL_MAX,
    idleTimeoutMillis: process.env.TIME_OUT
  }
}
