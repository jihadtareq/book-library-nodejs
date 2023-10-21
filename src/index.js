const express = require('express')
bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiRouter = require('./routes/index')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRouter)
module.exports = app