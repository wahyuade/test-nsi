const Bonus = require('../repositories/Bonus')
const Response = require('../services/Response')

module.exports = class BonusController {
  static async pointsWithinPolygon (req, res) {
    let response = new Response()
    try {
      response.setData(await Bonus.pointsWithinPolygon(req.query.id))
      response.setMessage('Data point pada polygon')
    } catch (e) {
      response.setStatus(false)
      response.setMessage(e)
    }
    res.json(response)
  }
}