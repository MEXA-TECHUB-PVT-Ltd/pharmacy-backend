const express = require('express')
const app = express()
const { supplyOrderModel } = require('../../../schemas')

const GetAllSupplyOrder = app.get('/getAllSupplyOrder', (req, res) => {
    supplyOrderModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetAllSupplyOrder