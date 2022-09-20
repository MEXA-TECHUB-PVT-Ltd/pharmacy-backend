const express = require('express')
const app = express()
const { supplyOrderModel} = require('../../../schemas')

const GetSupplyOrder = app.get('/getSupplyorder', (req, res) => {
    supplyOrderModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetSupplyOrder