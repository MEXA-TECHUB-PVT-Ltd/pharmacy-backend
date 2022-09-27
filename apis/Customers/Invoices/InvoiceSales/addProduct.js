const express = require('express')
const app = express()
const { InvoiceModel, InvoiceProductModel, productModel, orderProductModel } = require('../../../../schemas')
const OrderProduct = app.post('/createInvoiceProduct', (req, res) => {
    const InvoiceId=req.body.InvoiceId
    const ProductId = req.body.productId
    const CurrentAmount = req.body.totalAmount
    // res.send(result)
    InvoiceModel.findById(InvoiceId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const invoiceDiscount=result.invoiceDiscount
            const TotalPrevious=result.totalPayable
            const TotalTax=result.TotalTax
            var sum=parseInt(TotalPrevious)+ parseInt(CurrentAmount);
            var AmountIncTax=parseInt(TotalTax)+ parseInt(sum);
            var TotalPayable=parseInt(AmountIncTax)-parseInt(invoiceDiscount)
            orderProductModel.findById(ProductId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const productIdSingle = result.productId;
                    const productName = result.productName;
                    const companyName = result.companyName;
                    const expiryDate = result.expiryDate;
                    const batchNo = result.batchNo;
                    const amount = result.maxRetailPrice;

                    const newInvoiceProduct = new InvoiceProductModel({
                        InvoiceId: req.body.InvoiceId,
                        productId: productIdSingle,
                        productName: productName,
                        companyName: companyName,
                        packing: req.body.packing,
                        quantity: req.body.quantity,
                        expiryDate: expiryDate,
                        batchNo: batchNo,
                        amount: amount,
                        totalAmount: req.body.totalAmount

                    })
                    newInvoiceProduct.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            // res.send(result)
                            // Update Data 
                            const updateData = {
                                   $push: {
                                    products:result
                                   },
                                    amountRs: sum,
                                    AmountIncTax:AmountIncTax,
                                    totalPayable:TotalPayable
                                // },
                            }
                            const options = {
                                new: true
                            }
                            InvoiceModel.findByIdAndUpdate(InvoiceId, updateData, options, (error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(result)
                                }
                            })
                        }
                    })

                }
            })
        }
    })





})
module.exports = OrderProduct