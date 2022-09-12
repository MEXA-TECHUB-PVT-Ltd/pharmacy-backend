const express = require('express')
const app = express()
const { customerModel} = require('../../../schemas')

const GetCustomer = app.get('/getCustomer', (req, res) => {
    customerModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("CalculateTaxId")
})
module.exports = GetCustomer