const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.POSTGRE_DATABASE, process.env.POSTGRE_USERNAME, process.env.POSTGRE_PASSWORD, {
  host: process.env.POSTGRE_HOST,
  dialect: 'postgres',
  port: process.env.POSTGRE_PORT,
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    timestamps: false
}
})