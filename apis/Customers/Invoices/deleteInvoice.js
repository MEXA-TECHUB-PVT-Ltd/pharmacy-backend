const express = require('express')
const app = express()
const { InvoiceModel } = require('../../../schemas')

const RemoveInvoice = app.delete('/removeInvoice', (req, res) => {
    InvoiceModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveInvoice