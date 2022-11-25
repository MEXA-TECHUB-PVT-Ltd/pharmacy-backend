const express = require('express')
const app = express()
const { customerModel } = require('../../../schemas')

const GetAllCustomers = app.get('/getAllCustomers', (req, res) => {
    customerModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 }).populate("CalculateTaxId")
})
module.exports = GetAllCustomers