'use strict'

const propperNoun = require('../models/propperNoun')

const AddPropperNoun = async (req, res) => {
    try {
        const response = await propperNoun.insertMany({name: req.body.name})
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddPropperNoun: ${error}`
        })
    }
}

const ListPropperNoun = async (req, res) => {
    try {
        const response = await propperNoun.find()
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddCommonNoun: ${error}`
        })
    }
}

module.exports = {
    AddPropperNoun,
    ListPropperNoun
}