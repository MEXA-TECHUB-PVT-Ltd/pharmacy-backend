const express = require('express')
const app = express()
const {CalculateTaxModel } = require('../../../schemas')

const GetAllTaxCustomer = app.get('/getAllTaxCustomer', (req, res) => {
    CalculateTaxModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllTaxCustomer