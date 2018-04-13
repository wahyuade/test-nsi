const Point = require('../repositories/Point')
const Response = require('../services/Response')

module.exports = class PointController {
  static async addPoint (req, res) {
    let response = new Response()
    try {
      response.setData(await Point.addPoint(req.body))
      response.setMessage('Berhasil menambahkan point')
    } catch (e) {
      response.setStatus(false)
      response.setMessage('Harus dengan tipe GeoJSON point')
    }
    res.json(response)
  }

  static async getAllPoint (req, res) {
    let response = new Response()
    try {
      response.setData(await Point.getAllPoint())
      response.setMessage('Berhasil mengambil semua point')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }

  static async updatePoint (req, res) {
    let response = new Response()
    try {
      response.setData(await Point.updatePoint(req.query.id, req.body))
      response.setMessage('Berhasil mengubah point')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }

  static async deletePoint (req, res) {
    let response = new Response()
    try {
      response.setData(await Point.deletePoint(req.query.id))
      response.setMessage('Berhasil menghapus point')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }
}