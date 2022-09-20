const express = require('express')
const app = express()
const { saleOrderPartsModel, salesOrderModel, productModel } = require('../../../../schemas')

const CreateSaleOrderPart = app.post('/addSaleOrderPart', (req, res) => {
    const saleOrderId = req.body.saleOrderId
    // const productIdSales= req.body.productId
    salesOrderModel.findById(saleOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const SO_ref = result.SO_refNumber;
            const customerId = result.customerId;
            const CustomerName = result.CustomerName;
            const ContactPerson = result.ContactPerson;
            const PhoneNumber = result.PhoneNumber;
            // productModel.findById(productIdSales, (error, result) => {
            //     if (error) {
            //         res.send(error)
            //     } else {
            // const productName=result.productName;
            // const batchNo=result.batchNo;
            // const companyName=result.companyName;
                    const SaleOrderPart = new saleOrderPartsModel({
                        saleOrderId: req.body.saleOrderId,
                        SO_refNumber: SO_ref,
                        productId:req.body.productId,
                        // productName: productName,
                        // batchNo: batchNo,
                        // companyName: companyName,
                        quantity: req.body.quantity,
                        packSize: req.body.packSize,
                        customerId: customerId,
                        CustomerName: CustomerName,
                        ContactPerson: ContactPerson,
                        PhoneNumber: PhoneNumber
                    },
                    )
                    SaleOrderPart.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // const updateData1 = {
                            //     $push: {
                            //         productId: { $in: req.body.productId},
                            //     },
                            // }
                            // const options1 = {
                            //     new: true
                            // }
                            //     saleOrderPartsModel.findByIdAndUpdate(result.saleOrderId, updateData1, options1, (error, result) => {
                            //     })
                            // Update Data 
                            const updateData = {
                                $push: {
                                    salePartsId: result._id,
                                },
                            }
                            const options = {
                                new: true
                            }
                            salesOrderModel.findByIdAndUpdate(result.saleOrderId, updateData, options, (error, result) => {
                            })
                        }
                    })
            //     }
            // })
        }
    }).populate("saleOrderProducts")


})
module.exports = CreateSaleOrderPart