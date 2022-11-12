const express = require('express')
const app = express()
const { supplyOrderModel} = require('../../../schemas')

const UpdateCustomer = app.put('/updateSupplyOrder', (req, res) => {
    const updateData = {
        SPCategory:req.body.SPCategory,
        typeOforder:req.body.typeOforder,
        dateOfOrder:req.body.dateOfOrder,
        orderValidTill:req.body.orderValidTill,
        specialInstructions:req.body.specialInstructions,
    }
    const options = {
        new: true
    }
    supplyOrderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateCustomer