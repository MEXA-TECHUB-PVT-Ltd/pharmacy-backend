const express = require('express')
const app = express()
const { InvoiceModel} = require('../../../schemas')

const GetInvoice = app.get('/GetInvoice', (req, res) => {
    InvoiceModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("products").populate("customerId").populate("bookedBy").populate("deliveredBy")
})
module.exports = GetInvoice