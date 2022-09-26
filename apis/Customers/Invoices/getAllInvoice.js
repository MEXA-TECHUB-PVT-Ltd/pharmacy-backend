const express = require('express')
const app = express()
const { InvoiceModel } = require('../../../schemas')

const GetAllInvoice = app.get('/getAllInvoice', (req, res) => {
    InvoiceModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("products").populate("customerId").populate("bookedBy").populate("deliveredBy")
})
module.exports = GetAllInvoice