const Sequelize = require('sequelize')
const sequelize = require('../services/Sequelize')

module.exports = sequelize.define('area', {
  nama: {
    type: Sequelize.STRING
  },
  luas: {
    type: Sequelize.REAL
  },
  geom: {
    type: Sequelize.GEOMETRY('POLYGON', 4326)
  }
}, {
  hooks: {
    beforeValidate: (area, options) => {
      if (!area.dataValues.geom.crs) {
        area.dataValues.geom.crs = {
          type: 'name',
          properties: {
            name: 'EPSG:4326'
          }
        }
      }
    }
  }
})