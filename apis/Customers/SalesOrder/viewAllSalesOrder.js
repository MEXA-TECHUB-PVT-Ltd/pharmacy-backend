const express = require('express')
const app = express()
const { salesOrderModel } = require('../../../schemas')

const GetAllOrderProducts = app.get('/getAllSalesOrder', (req, res) => {
    salesOrderModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).sort({ $natural: -1 }).populate("supplyOrderId").populate("saleOrderProducts").populate("salePartsId")
})
module.exports = GetAllOrderProducts