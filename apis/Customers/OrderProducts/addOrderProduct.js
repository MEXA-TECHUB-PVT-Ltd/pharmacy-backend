const express = require('express')
const app = express()
const { supplyOrderModel, orderProductModel } = require('../../../schemas')
const OrderProduct = app.post('/createOrderProduct', (req, res) => {
    supplyOrderModel.findById(req.body.supplyOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
           
                    const newOrderProduct = new orderProductModel({
                        supplyOrderId: req.body.supplyOrderId,
                        productName: req.body.productName,
                        companyName: req.body.companyName,
                        packing: req.body.packing,
                        ratePerUnit: req.body.ratePerUnit,
                        quantity: req.body.quantity,
                        amount:req.body.amount,
                        totalAmount:req.body.totalAmount

                    })
                    newOrderProduct.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
            //                 // Update Daya 
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

})
module.exports = OrderProduct