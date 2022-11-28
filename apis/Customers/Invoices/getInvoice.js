const express = require('express')
const app = express()
const { InvoiceModel} = require('../../../schemas')

const GetInvoice = app.get('/GetInvoice', (req, res) => {
    InvoiceModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if(result===null){
                res.json({
                    data: result,
                    message: "No Record for this id "
                })
            }else{
                res.json({
                    data: result,
                    message: "Found successfully"
                })
            }
        }
    }).populate("products").populate("customerId").populate("bookedBy").populate("deliveredBy")
})
module.exports = GetInvoice