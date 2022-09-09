const express = require('express')
const app = express()
const { orderProductModel} = require('../../../schemas')

const GetOrderProduct = app.get('/getOrderProduct', (req, res) => {
    orderProductModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetOrderProduct