const express = require('express')
const { salesOrderModel} = require('../../../schemas')
const app = express()

const GetUserProfile = app.get('/getAllSupplySales', (req, res) => {
    salesOrderModel.find({supplyOrderId: req.query.supplyOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                count:result.length
            })
        }
    }).sort({ $natural: -1 }).populate("supplyOrderId").populate("saleOrderProducts").populate("salePartsId").populate("customerId")
})
module.exports = GetUserProfile