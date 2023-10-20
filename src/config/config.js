require('dotenv').config()

module.exports = {
  host: process.env.PORT || '127.0.0.1',
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    url: process.env.DB_URL || '',
    drive: process.env.DB_DRIVE || 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'library_management',
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || 'root1234',
    connection_name: process.env.DB_CONNECTION_NAME || ''
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  }
}
