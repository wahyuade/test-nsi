const GeoJSONParser = require('geojson')
const Sequelize = require('../services/Sequelize')

module.exports = class Bonus {
  static async pointsWithinPolygon (idPolygon) {
    let allPointWhthin = JSON.stringify(await Sequelize.query('SELECT poi.id, poi.nama, poi.geom FROM poi, area WHERE area.id='+idPolygon+' AND ST_Contains(area.geom, poi.geom)'))
    let dataPoints = JSON.parse(allPointWhthin)[0]
    
    return dataPoints.length > 0 ? GeoJSONParser.parse(dataPoints, {GeoJSON: 'geom'}) : 'Tidak ditemukan point'
  }

  static async pointAreaLocation (dataPointGeoJSON) {
    let areas = JSON.stringify(await Sequelize.query("SELECT area.id, area.nama, area.luas, area.geom FROM area WHERE ST_Contains(area.geom, ST_GeomFromText('POINT("+dataPointGeoJSON.geometry.coordinates[0]+" "+dataPointGeoJSON.geometry.coordinates[1]+")', 4326))"))
    let dataAreas = JSON.parse(areas)[0]
    return dataAreas.length > 0 ? GeoJSONParser.parse(dataAreas, {GeoJSON: 'geom'}) : 'Lokasi point tidak ditemukan dalam polygon manapun'
  }
}