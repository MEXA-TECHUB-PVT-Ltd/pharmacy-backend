const express = require('express')
const app = express()
const moment = require('moment');
const { supplyOrderModel } = require('../../../schemas')

const CreateSupplyOrder = app.post('/addSupplyOrder', (req, res) => {
    let refNumber = Math.floor((Math.random() * 100000) + 1);
    const dateOfOrder=req.body.dateOfOrder
//  const Date=dateOfOrder.slice(0,10)
 const orderValidTill=req.body.orderValidTill
//  console.log(Date)
    const SupplyOrder = new supplyOrderModel({
        SPCategory:"Advanced Supply Order",
        customerId:req.body.customerId,
        refNumber:refNumber,
        typeOforder:req.body.typeOforder,
        dateOfOrder:moment(dateOfOrder).format("DD/MM/YYYY"),
        orderValidTill:moment(orderValidTill).format("DD/MM/YYYY"),
        specialInstructions:req.body.specialInstructions,
        orderedProductId:[],
        Status:'Pending'
    })
    SupplyOrder.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                message: "Created successfully"
            })
        }
    })

})
module.exports = CreateSupplyOrder