'use strict'

const commonNoun = require('../models/commonNoun')

const AddCommonNoun = async (req, res) => {
    try {
        const response = await commonNoun.insertMany({name: req.body.name})
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddCommonNoun: ${error}`
        })
    }
}

const ListCommonNoun = async (req, res) => {
    try {
        const response = await commonNoun.find()
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddCommonNoun: ${error}`
        })
    }
}

module.exports = {
    AddCommonNoun,
    ListCommonNoun
}