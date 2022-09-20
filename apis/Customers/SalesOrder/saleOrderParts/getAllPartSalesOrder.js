const express = require('express')
const app = express()
const { saleOrderPartsModel } = require('../../../../schemas')

const GetAllSalesOrderParts = app.get('/getAllSalesParts', (req, res) => {
    saleOrderPartsModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllSalesOrderParts