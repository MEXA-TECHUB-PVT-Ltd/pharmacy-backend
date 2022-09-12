const express = require('express')
const app = express()
const { salesOrderModel } = require('../../../schemas')

const UpdateSalesorder = app.put('/updateSalesOrder', (req, res) => {
    const updateData = {
        saleOrderState: req.body.saleOrderState,
        orderDeliveryStatus: req.body.orderDeliveryStatus,
    }
    const options = {
        new: true
    }
    salesOrderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateSalesorder