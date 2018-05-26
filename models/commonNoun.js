'use strict'

const mongoose = require('../config/config').db
const Schema = mongoose.Schema

const commonNoun = new Schema({
    name: String
},{ versionKey: false })

module.exports = mongoose.model('commonNoun', commonNoun)