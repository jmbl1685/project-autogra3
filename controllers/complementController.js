'use strict'

const complement = require('../models/complement')

const AddComplement = async (req, res) => {
    try {
        const response = await complement.insertMany({name: req.body.name})
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddComplement: ${error}`
        })
    }
}

const ListComplement = async (req, res) => {
    try {
        const response = await complement.find()
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({
            message: `Error in AddCommonNoun: ${error}`
        })
    }
}

module.exports = {
    AddComplement,
    ListComplement
}