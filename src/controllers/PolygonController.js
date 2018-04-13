const Polygon = require('../repositories/Polygon')
const Response = require('../services/Response')

module.exports = class PolygonController {
  static async addPolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Polygon.addPolygon(req.body))
      response.setMessage('Berhasil menambahkan polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage('Harus dengan tipe GeoJSON polygon')
    }
    res.json(response)
  }

  static async getPolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Polygon.getPolygon(req.query.id))
      response.setMessage('Berhasil mengambil polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage('Id tidak ditemukan')
    }
    res.json(response)
  }

  static async getAllPolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Polygon.getAllPolygon())
      response.setMessage('Berhasil mengambil semua polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }

  static async updatePolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Polygon.updatePolygon(req.query.id ,req.body))
      response.setMessage('Berhasil mengubah polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }

  static async deletePolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Polygon.deletePolygon(req.query.id))
      response.setMessage('Berhasil menghapus polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }
}