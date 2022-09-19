const express = require('express')
const app = express()
const { InvoiceModel } = require('../../../schemas')

const GetAllInvoice = app.get('/getInvoiceSortDate', (req, res) => {
    InvoiceModel.find({},null,{sort:{dueDate:-1}},(error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("products")
})
module.exports = GetAllInvoice