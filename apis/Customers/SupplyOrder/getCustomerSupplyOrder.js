const express = require('express')
const { supplyOrderModel} = require('../../../schemas')
const app = express()

const GetSupplyCustomer = app.get('/getCustomerSupplyOrder', (req, res) => {
    supplyOrderModel.find({customerId : req.query.customerId    }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetSupplyCustomer