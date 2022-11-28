const express = require('express')
const app = express()
const { productModel } = require('../../../schemas')
const moment = require('moment');

const UpdateProduct = app.put('/updateProduct', (req, res) => {
    const maxRetailPrice = req.body.maxRetailPrice;
    const tradePrice = maxRetailPrice * 0.85;
    if (req.body.expiryDate === undefined) {
        const updateData = {
            itemName: req.body.itemName,
            itemCode: req.body.itemCode,
            packSize: req.body.packSize,
            registrationNo: req.body.registrationNo,
            genericName: req.body.genericName,
            companyName: req.body.companyName,
            batchNo: req.body.batchNo,
            maxRetailPrice: req.body.maxRetailPrice,
            tradePrice: tradePrice,
        }
        const options = {
            new: true
        }
        productModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.json({
                    data: result,
                    message: "Updated successfully"
                })
            }
        })
    } else {
    const Createddate = req.body.expiryDate;
        const updateData = {
            itemName: req.body.itemName,
            itemCode: req.body.itemCode,
            packSize: req.body.packSize,
            registrationNo: req.body.registrationNo,
            genericName: req.body.genericName,
            companyName: req.body.companyName,
            batchNo: req.body.batchNo,
            maxRetailPrice: req.body.maxRetailPrice,
            expiryDate: moment(Createddate).format("DD/MM/YYYY"),
            tradePrice: tradePrice,
        }
        const options = {
            new: true
        }
        productModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.json({
                    data: result,
                    message: "Updated successfully"
                })
            }
        })
    }
    // const updateData = {
    //     itemName: req.body.itemName,
    //     itemCode: req.body.itemCode,
    //     packSize: req.body.packSize,
    //     registrationNo: req.body.registrationNo,
    //     genericName: req.body.genericName,
    //     companyName: req.body.companyName,
    //     expiryDate: req.body.expiryDate,
    //     batchNo: req.body.batchNo,
    //     maxRetailPrice: req.body.maxRetailPrice,
    //     tradePrice: tradePrice,
    // }
    // const options = {
    //     new: true
    // }
    // productModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
    //     if (error) {
    //         res.send(error)
    //     } else {
    //         res.json({
    //             data: result,
    //             message: "Updated successfully"
    //         })
    //     }
    // })
})
module.exports = UpdateProduct