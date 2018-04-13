const GeoJSONParser = require('geojson')
const Sequelize = require('../services/Sequelize')

module.exports = class Bonus {
  static async pointsWithinPolygon (idPolygon) {
    let allPointWhthin = JSON.stringify(await Sequelize.query('SELECT poi.id, poi.nama, poi.geom FROM poi, area WHERE area.id='+idPolygon+' AND ST_Contains(area.geom, poi.geom)'))
    let dataPoints = JSON.parse(allPointWhthin)[0]
    
    return dataPoints.length > 0 ? GeoJSONParser.parse(dataPoints, {GeoJSON: 'geom'}) : 'Tidak ditemukan point'
  }
}