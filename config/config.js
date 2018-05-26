'use strict'

const mongoose = require('mongoose')

const urlMongoDBService = {
    dev: 'mongodb://localhost:27017/autgra3',
}

const isEmpty = (json) => {
    for (let key in json) {
        if (json[key] === "") return true
    }
    return false
}

mongoose.Promise = global.Promise;
mongoose.connect(urlMongoDBService.dev)

module.exports = {
    port: process.env.PORT || 3000,
    db: mongoose,
    isEmpty
}