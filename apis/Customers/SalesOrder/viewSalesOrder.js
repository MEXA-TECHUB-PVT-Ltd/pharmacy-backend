const express = require('express')
const app = express()
const { salesOrderModel} = require('../../../schemas')

const GetSalesOrder = app.get('/getSalesOrder', (req, res) => {
    salesOrderModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("supplyOrderId").populate("saleOrderProducts").populate("salePartsId").populate("customerId")
})
module.exports = GetSalesOrder