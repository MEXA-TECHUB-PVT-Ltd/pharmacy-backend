const express = require('express')
const app = express()
const {orderProductModel } = require('../../../schemas')

const RemoveCustomer = app.delete('/removeOrderproduct', (req, res) => {
    orderProductModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveCustomer