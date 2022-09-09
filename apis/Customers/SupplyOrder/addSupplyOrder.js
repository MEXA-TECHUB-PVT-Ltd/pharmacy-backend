const express = require('express')
const app = express()
const { supplyOrderModel } = require('../../../schemas')

const CreateSupplyOrder = app.post('/addSupplyOrder', (req, res) => {
    let refNumber = Math.floor((Math.random() * 100000) + 1);

    const SupplyOrder = new supplyOrderModel({
        SPCategory:req.body.SPCategory,
        customerId:req.body.customerId,
        refNumber:refNumber,
        typeOforder:req.body.typeOforder,
        dateOfOrder:req.body.dateOfOrder,
        orderValidTill:req.body.orderValidTill,
        specialInstructions:req.body.specialInstructions,
        orderedProductId:[]
    })
    SupplyOrder.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = CreateSupplyOrder