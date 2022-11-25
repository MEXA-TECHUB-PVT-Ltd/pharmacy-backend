const express = require('express')
const app = express()
const { supplyOrderModel } = require('../../../schemas')

const RemoveCustomer = app.delete('/removeSupplyOrder', (req, res) => {
    supplyOrderModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                message: "Deleted successfully"
            })
        }
    })
})
module.exports = RemoveCustomer