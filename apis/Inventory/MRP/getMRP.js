const express = require('express')
const app = express()
const { MRPModel} = require('../../../schemas')

const GetProduct = app.get('/getMRP', (req, res) => {
    MRPModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("customerId")
})
module.exports = GetProduct