const express = require('express')
const app = express()
const {salesOrderModel} = require('../../../schemas')

const RemoveSalesOrder = app.delete('/removeSalesOrder', (req, res) => {
    salesOrderModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveSalesOrder