const express = require('express')
const app = express()
const { salesOrderModel} = require('../../../schemas')

const GetSalesOrder = app.get('/getSalesOrder', (req, res) => {
    salesOrderModel.findById(req.query._id, (error, result) => {
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
    }).populate("supplyOrderId").populate("saleOrderProducts").populate("salePartsId").populate("customerId")
})
module.exports = GetSalesOrder