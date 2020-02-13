const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Base = require('./models/Base')
const databaseSettings = require('./knexfile').development;
const knex = require('knex')(databaseSettings);
const app = express()
Base.establishConnection(knex)

app.use(cors())
app.use(bodyParser.json())
module.exports = { app, knex };