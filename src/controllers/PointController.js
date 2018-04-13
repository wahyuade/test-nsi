const Point = require('../repositories/Point')
const Response = require('../services/Response')

module.exports = class PointController {
  static async addPoint (req, res) {
    let response = new Response()
    try {
      response.setGeoJSON(await Point.addPoint(req.body))
      response.setMessage('Berhasil menambahkan point')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  } 
}