'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const routes = require('./routes/routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use(express.static('views'))
app.use('/api', routes)

app.get('/', (req,res) => {
    res.status(200).sendfile(__dirname + '/views/index.html')
})

module.exports = app