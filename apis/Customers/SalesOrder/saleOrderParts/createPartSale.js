const express = require('express')
const app = express()
const { saleOrderPartsModel, salesOrderModel, orderProductModel } = require('../../../../schemas')

const CreateSaleOrderPart = app.post('/addSaleOrderPart', (req, res) => {
    const saleOrderId = req.body.saleOrderId
    salesOrderModel.findById(saleOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)supplyOrderId
            const SO_ref = result.SO_refNumber;
            const customerId = result.customerId;
            const CustomerName = result.CustomerName;
            const ContactPerson = result.ContactPerson;
            const PhoneNumber = result.PhoneNumber;
           
            orderProductModel.findById(req.body.productId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    const productName = result.productName
                    const companyName = result.companyName
                    const batchNo = result.batchNo
                    const amount = result.amount
                    const quantity = req.body.quantity
                    const totalAmountPayable = amount * quantity
                    // let sum = 0
                    // sum = parseInt(totalAmountPayable) + parseInt(totalAmountPayable)
                    const SaleOrderPart = new saleOrderPartsModel({
                        saleOrderId: req.body.saleOrderId,
                        SO_refNumber: SO_ref,
                        productId: req.body.productId,
                        productName: productName,
                        companyName: companyName,
                        batchNo: batchNo,
                        amount: amount,
                        quantity: req.body.quantity,
                        packSize: req.body.packSize,
                        customerId: customerId,
                        CustomerName: CustomerName,
                        ContactPerson: ContactPerson,
                        PhoneNumber: PhoneNumber,
                        totalAmountPayable: totalAmountPayable
                    },
                    )
                    SaleOrderPart.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            const updateData = {
                                $push: {
                                    salePartsId: result._id,
                                },
                                // SalesTotalAmount:
                            }
                            const options = {
                                new: true
                            }
                            salesOrderModel.findByIdAndUpdate(result.saleOrderId, updateData, options, (error, result) => {
                            })
                        }
                    })
                }
            })
        }
    }).populate("saleOrderProducts")
})
module.exports = CreateSaleOrderPart