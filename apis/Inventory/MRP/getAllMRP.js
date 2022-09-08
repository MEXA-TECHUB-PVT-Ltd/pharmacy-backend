const express = require('express')
const app = express()
const { MRPModel } = require('../../../schemas')

const GetAllProducts = app.get('/getAllMRP', (req, res) => {
    MRPModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("customerId")
})
module.exports = GetAllProducts