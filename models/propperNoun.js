'use strict'

const mongoose = require('../config/config').db
const Schema = mongoose.Schema

const propperNoun = new Schema({
    name: String
},{ versionKey: false })

module.exports = mongoose.model('propperNoun', propperNoun)