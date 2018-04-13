const PoiModel = require('../models/PoiModel')
const GeoJSONParser = require('geojson')

module.exports = class Point {
  static async addPoint (pointOfGeoJSON) {
    let data = await PoiModel.create({nama: pointOfGeoJSON.properties.nama, geom: pointOfGeoJSON.geometry})
    return data
  }

  static async getAllPoint () {
    let allPoint = JSON.stringify(await PoiModel.findAll())
    return {
      geoJSON: GeoJSONParser.parse(JSON.parse(allPoint), {GeoJSON: 'geom'})
    }
  }
}