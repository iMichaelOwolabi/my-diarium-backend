require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": 'postgres',
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": 'postgres',
  },
  "production": {
    use_env_variable: process.env.MYDIARIUM_DB_URL
  }
}
