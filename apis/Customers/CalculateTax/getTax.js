const express = require('express')
const { CalculateTaxModel } = require('../../../schemas')
const app = express()

const GetTaxCustomer = app.get('/getCustomerTax', (req, res) => {
    CalculateTaxModel.find({customerId: req.query.customerId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetTaxCustomer