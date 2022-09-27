const express = require('express')
const { orderProductModel} = require('../../../schemas')
const app = express()

const GetSupplyCustomer = app.get('/getProductOrderData', (req, res) => {
    orderProductModel.find({productId : req.query.productId    }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("supplyOrderId")
})
module.exports = GetSupplyCustomer