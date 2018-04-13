const Sequelize = require('sequelize')
const sequelize = require('../services/Sequelize')

module.exports = sequelize.define('poi', {
  nama: {
    type: Sequelize.STRING
  },
  geom: {
    type: Sequelize.GEOMETRY('POINT', 4326)
  }
}, {
  hooks: {
    beforeValidate: (poi, options) => {
      if (!poi.dataValues.geom.crs) {
        poi.dataValues.geom.crs = {
          type: 'name',
          properties: {
            name: 'EPSG:4326'
          }
        }
      }
    }
  }
})