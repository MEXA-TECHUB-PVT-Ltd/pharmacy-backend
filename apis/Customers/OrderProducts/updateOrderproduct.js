const express = require('express')
const app = express()
const { orderProductModel } = require('../../../schemas')

const UpdateCustomer = app.put('/updateOrderProduct', (req, res) => {
    const updateData = {
        packing: req.body.packing,
        ratePerUnit: req.body.ratePerUnit,
        quantity: req.body.quantity,
        amount: req.body.amount,
        totalAmount: req.body.totalAmount
    }
    const options = {
        new: true
    }
    orderProductModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateCustomer