const express = require('express')
const { orderProductModel } = require('../../../schemas')
const app = express()

const GetUserProfile = app.get('/getProductSupplyOrder', (req, res) => {
    orderProductModel.find({supplyOrderId: req.query.supplyOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserProfile