const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

app.use(bodyParser.json())

app.use('/api', require('./routers/ApiRouter'))

app.listen(process.env.APP_PORT)