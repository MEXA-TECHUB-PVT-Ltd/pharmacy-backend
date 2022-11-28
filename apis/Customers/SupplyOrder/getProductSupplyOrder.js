const express = require('express')
const { orderProductModel} = require('../../../schemas')
const app = express()

const GetSupplyCustomer = app.get('/getProductOrderData', (req, res) => {
    orderProductModel.find({productId : req.query.productId    }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                count:result.length
            })
        }
    }).populate("supplyOrderId")
})
module.exports = GetSupplyCustomer