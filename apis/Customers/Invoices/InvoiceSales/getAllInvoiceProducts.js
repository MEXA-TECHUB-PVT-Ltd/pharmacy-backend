const express = require('express')
const app = express()
const { InvoiceModel } = require('../../../../schemas')

const GetAllCustomers = app.get('/getAllInvoices', (req, res) => {
    InvoiceModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("products").populate("customerId")
})
module.exports = GetAllCustomers