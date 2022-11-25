const express = require('express')
const { supplyOrderModel} = require('../../../schemas')
const moment = require('moment');
const app = express()

const GetSupplyCustomer = app.get('/getDailySupplyOrder', (req, res) => {
    const dateOfOrder= req.body.dateOfOrder ;
    supplyOrderModel.find({dateOfOrder : moment(dateOfOrder).format("DD/MM/YYYY"),    }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                count:result.length
            })
        }
    })
    .populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetSupplyCustomer