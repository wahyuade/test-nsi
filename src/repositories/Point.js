const PoiModel = require('../models/PoiModel')

module.exports = class Point {
  static async addPoint (pointOfGeoJSON) {
    let data = await PoiModel.create({nama: pointOfGeoJSON.properties.nama, geom: pointOfGeoJSON.geometry})
    return data
  }
}