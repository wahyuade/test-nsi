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
    let allPolygon = JSON.stringify(await AreaModel.findAll())
    return {
      geoJSON: GeoJSONParser.parse(JSON.parse(allPolygon), {GeoJSON: 'geom'})
    }
  }

  static async updatePolygon (idPolygon, newPolygonOfGeoJSONData) {
    let polygon = Turf.polygon(newPolygonOfGeoJSONData.geometry.coordinates)
    let area = Turf.area(polygon)
    let update = await AreaModel.update({nama: newPolygonOfGeoJSONData.properties.nama, geom: newPolygonOfGeoJSONData.geometry, luas: area}, {where: {id: idPolygon}})
    if (update[0] == 1) 
      return
    else 
      throw "Id tidak ditemukan dan data harus berbentuk GeoJSON Polygon"
  }

  static async deletePolygon (idPolygon) {
    let deleteArea = await AreaModel.destroy({where: {id: idPolygon}})
    if (deleteArea == 1) 
      return
    else 
      throw "Id tidak ditemukan"
  }
}