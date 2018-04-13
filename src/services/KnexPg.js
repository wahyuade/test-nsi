const KnexPg = require('knex')

module.exports = KnexPg({
  client: 'pg',
  connection: {
    host: process.env.POSTGRE_HOST,
    port: process.env.POSTGRE_PORT,
    user: process.env.POSTGRE_USERNAME,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    charset: 'utf8'
  }
})