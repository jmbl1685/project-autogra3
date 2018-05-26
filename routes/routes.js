'use strict'

const express = require('express')
const api = express.Router()

const commonNounController = require('../controllers/commonNounController')
const complementController = require('../controllers/complementController')
const propperNounController = require('../controllers/propperNounController')

//#region API RUNNING 
api.get('/', (req, res) => {
    res.status(200).send('<style>*{ font-family: Arial; font-size: 50px; text-decoration: underline; color: #4c0094; text-align: center; margin-top: 30px}</style><h1>API RUNNING</h1>')
})
//#endregion

//#region commonNoun 
api.post('/commonNoun', commonNounController.AddCommonNoun)
api.get('/commonNoun', commonNounController.ListCommonNoun)
//#endregion
//#region complement 
api.post('/complement', complementController.AddComplement)
api.get('/complement', complementController.ListComplement)
//#endregion
//#region propperNoun 
api.post('/propperNoun', propperNounController.AddPropperNoun)
api.get('/propperNoun', propperNounController.ListPropperNoun)
//#endregion

module.exports = api