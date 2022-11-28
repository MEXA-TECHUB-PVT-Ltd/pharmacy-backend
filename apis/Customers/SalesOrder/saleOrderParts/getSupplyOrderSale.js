const express = require('express')
const { saleOrderPartsModel} = require('../../../../schemas')
const app = express()

const GetUserProfile = app.get('/getAllSupplySalesOrder', (req, res) => {
    saleOrderPartsModel.find({saleOrderId: req.query.saleOrderId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
                res.json({
                    data: result,
                    count: result.length
                })
           
        }
    }).populate("productId")
})
module.exports = GetUserProfile