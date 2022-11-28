const express = require('express')
const moment = require('moment');
const app = express()
const { productModel } = require('../../../schemas')

const CreateProduct = app.post('/addProduct', (req, res) => {
    const Createddate = req.body.expiryDate;
    const maxRetailPrice = req.body.maxRetailPrice;
    const tradePrice = maxRetailPrice * 0.85;
    // console.log(tradePrice)
    const product = new productModel({
        itemName: req.body.itemName,
        itemCode: req.body.itemCode,
        packSize: req.body.packSize,
        registrationNo: req.body.registrationNo,
        genericName: req.body.genericName,
        companyName: req.body.companyName,
        expiryDate: moment(Createddate).format("DD/MM/YYYY"),
        batchNo: req.body.batchNo,
        maxRetailPrice: req.body.maxRetailPrice,
        tradePrice: tradePrice,

    })
    product.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                message: "Product Created successfully"
            })
        }
    })

})
module.exports = CreateProduct