const express = require('express')
const { InvoiceModel} = require('../../../schemas')
const app = express()

const GetUserInvoiceSupply = app.get('/getAllSupplyInvoices', (req, res) => {
    InvoiceModel.find({supplyOrderId: req.query.supplyOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("products").populate("customerId").populate("bookedBy").populate("deliveredBy")
})
module.exports = GetUserInvoiceSupply