const express = require('express')
const { InvoiceModel} = require('../../../schemas')
const app = express()

const GetUserInvoiceSupply = app.get('/getAllSupplyInvoices', (req, res) => {
    InvoiceModel.find({supplyOrderId: req.query.supplyOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                count:result.length
            })
        }
    }).sort({ $natural: -1 }).populate("products").populate("customerId").populate("bookedBy").populate("deliveredBy")
})
module.exports = GetUserInvoiceSupply