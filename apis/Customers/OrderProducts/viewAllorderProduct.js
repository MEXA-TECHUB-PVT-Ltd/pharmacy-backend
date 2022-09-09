const express = require('express')
const app = express()
const { orderProductModel } = require('../../../schemas')

const GetAllOrderProducts = app.get('/getAllOrderProducts', (req, res) => {
    orderProductModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllOrderProducts