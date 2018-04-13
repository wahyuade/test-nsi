const express = require('express')

const api = express.Router()

const PointController = require('../controllers/PointController')
const PolygonController = require('../controllers/PolygonController')
const BonusController = require('../controllers/BonusController')

api.post('/add-point', PointController.addPoint)
api.get('/get-point', PointController.getPoint)
api.get('/list-all-point', PointController.getAllPoint)
api.post('/update-point', PointController.updatePoint)
api.delete('/delete-point', PointController.deletePoint)

api.post('/add-polygon', PolygonController.addPolygon)
api.get('/get-polygon', PolygonController.getPolygon)
api.get('/list-all-polygon', PolygonController.getAllPolygon)
api.post('/update-polygon', PolygonController.updatePolygon)
api.delete('/delete-polygon', PolygonController.deletePolygon)

api.get('/list-point-in-polygon', BonusController.pointsWithinPolygon)
api.post('/locate-point', BonusController.locatePoint)

module.exports = api