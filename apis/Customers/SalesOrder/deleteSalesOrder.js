const express = require('express')
const app = express()
const {salesOrderModel} = require('../../../schemas')

const RemoveSalesOrder = app.delete('/removeSalesOrder', (req, res) => {
    salesOrderModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                message: "Deleted successfully"
            })
        }
    })
})
module.exports = RemoveSalesOrder