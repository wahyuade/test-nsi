const AreaModel = require('../models/AreaModel')
const GeoJSONParser = require('geojson')
const Turf = require('@turf/turf')

module.exports = class Polygon {
  static async addPolygon (polygonOfGeoJSON) {
    let polygon = Turf.polygon(polygonOfGeoJSON.geometry.coordinates)
    let area = Turf.area(polygon)
    let data = await AreaModel.create({nama: polygonOfGeoJSON.properties.nama, geom: polygonOfGeoJSON.geometry, luas: area})
    return data
  }

  static async getAllPolygon () {

  }

  static async updatePolygon (idPolygon, newPolygonOfGeoJSONData) {

  }

  static async deletePolygon (idPolygon) {

  }
}