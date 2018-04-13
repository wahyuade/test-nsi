const express = require('express')

const api = express.Router()

const PointController = require('../controllers/PointController')
const PolygonController = require('../controllers/PolygonController')

api.post('/add-point', PointController.addPoint)
api.get('/list-all-point', PointController.getAllPoint)
api.post('/update-point', PointController.updatePoint)
api.delete('/delete-point', PointController.deletePoint)

module.exports = api