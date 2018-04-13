const express = require('express')

const api = express.Router()

const PointController = require('../controllers/PointController')
const PolygonController = require('../controllers/PolygonController')

api.post('/add-point', PointController.addPoint)

module.exports = api