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

  static async updatePoint (idPoint, newPointData) {
    let update = await PoiModel.update({nama: newPointData.properties.nama, geom: newPointData.geometry}, {where: {id: idPoint}})
    if (update[0] == 1) 
      return
    else 
      throw "Id tidak ditemukan dan data harus berbentuk GeoJSON Point"
  }

  static async deletePoint (idPoint) {
    let deletePoi = await PoiModel.destroy({where: {id: idPoint}})
    if (deletePoi == 1) 
      return
    else 
      throw "Id tidak ditemukan"
  }
}