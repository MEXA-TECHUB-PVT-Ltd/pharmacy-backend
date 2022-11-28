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
            if(result===null){
                res.json({
                    data: result,
                    message: "No Record for this id "
                })
            }else{
                res.json({
                    data: result,
                    message: "Found successfully"
                })
            }
        }
    })
})
module.exports = UpdateCustomer