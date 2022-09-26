const express = require('express')
const app = express()
const { saleOrderPartsModel} = require('../../../../schemas')

const GetSale = app.get('/GetOneSale', (req, res) => {
    saleOrderPartsModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("productId")
})
module.exports = GetSale