const express = require('express')
const app = express()
const { supplyOrderModel, orderProductModel, productModel } = require('../../../schemas')
const OrderProduct = app.post('/createOrderProduct', (req, res) => {
    supplyOrderModel.findById(req.body.supplyOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const ProductId = req.body.productId
            orderProductModel.find({ supplyOrderId: req.body.supplyOrderId, productId: req.body.productId }, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    if (result === undefined || result.length == 0) {
                        productModel.findById(ProductId, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                // res.send(result)
                                const productName = result.itemName;
                                const companyName = result.companyName;
                                const expiryDate = result.expiryDate;
                                const batchNo = result.batchNo;
                                const quantity=req.body.quantity;
                                const amount=result.maxRetailPrice;
                                const Total=quantity*amount;
                                console.log(Total)
                                const newOrderProduct = new orderProductModel({
                                    supplyOrderId: req.body.supplyOrderId,
                                    productId: ProductId,
                                    productName: productName,
                                    companyName: companyName,
                                    packing: req.body.packing,
                                    ratePerUnit: req.body.ratePerUnit,
                                    quantity: req.body.quantity,
                                    expiryDate: expiryDate,
                                    batchNo: batchNo,
                                    amount:amount,
                                    totalAmount: Total

                                })
                                newOrderProduct.save((error, result) => {
                                    if (error) {
                                        res.send(error)
                                    } else {
                                        res.send(result)
                                        // Update Data 
                                        const updateData = {
                                            $push: {
                                                orderedProductId: result._id,
                                            },
                                        }
                                        const options = {
                                            new: true
                                        }
                                        supplyOrderModel.findByIdAndUpdate(result.supplyOrderId, updateData, options, (error, result) => {
                                        })
                                    }
                                })

                            }
                        })
                    } else {
                        res.send("Product Already Exist for this Supply Order")


                    }
                }
            })



        }
    })

})
module.exports = OrderProduct