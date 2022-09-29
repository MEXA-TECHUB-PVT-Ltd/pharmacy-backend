const express = require('express')
const { supplyOrderModel} = require('../../../schemas')
const app = express()
const { startOfDay, endOfDay } = require('date-fns')

const GetSupplyCustomer = app.get('/getWeeklySupplyOrder', (req, res) => {
    // // const dateOfOrder= req.query.dateOfOrder ;
    // let today =req.query.dateOfOrder
    // // let first = today.getDate() - today.getDay();
    // // let last = first + 6;
    // let last = req.query.lastday;

    // // const DateData=dateOfOrder.slice(0,10)
    // let firstday = new Date(today.setDate(first)).toUTCString();
    // // let firstWeekDay=firstday.slice(0,10)
    // let lastday = new Date(today.setDate(last)).toUTCString();
    // // let lastWeekDay=lastday.slice(0,10)
    // let firstday = new Date(2022,09,28)
    // let lastday =new Date(2022,09,30)
    var curr = new Date(); // get current date
    console.log(curr.getDay())
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 6;
    var firstday = new Date(curr.setDate(first))
var lastday = new Date(curr.setDate(last)).toUTCString();
    
    // console.log(firstday)
    supplyOrderModel.find({ dateOfOrder: {
        $gte: firstday,
        $lte: lastday
      }}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("orderedProductId").populate("salesOrderId").populate("customerId")
})
module.exports = GetSupplyCustomer