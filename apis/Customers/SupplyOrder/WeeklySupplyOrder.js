const express = require('express')
const { supplyOrderModel } = require('../../../schemas')
const app = express()
const moment = require('moment');

const GetSupplyCustomer = app.get('/getWeeklySupplyOrder', (req, res) => {
    var startingDate = moment(req.body.startingDate).format("DD/MM/YYYY")
    var endingDate = moment(req.body.endingDate).format("DD/MM/YYYY")
    supplyOrderModel.find({
        dateOfOrder: {
            $gte: startingDate,
            $lte: endingDate
        }
    }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({ data: result, count: result.length })
        }
    }).populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetSupplyCustomer