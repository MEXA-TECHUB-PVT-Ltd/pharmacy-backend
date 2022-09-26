const express = require('express')
const { saleOrderPartsModel} = require('../../../../schemas')
const app = express()

const GetUserProfile = app.get('/getAllSupplySalesOrder', (req, res) => {
    saleOrderPartsModel.find({saleOrderId: req.query.saleOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("productId")
})
module.exports = GetUserProfile