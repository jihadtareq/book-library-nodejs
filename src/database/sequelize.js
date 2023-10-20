const config = require('../config/config')

module.exports = {
  // this config is for Development and Google Cloud Build
  development: {
    url: config.db.url,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    dialect: config.db.drive,
    define: {
      underscored: true
    }
  },
}