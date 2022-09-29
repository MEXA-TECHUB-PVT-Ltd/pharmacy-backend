const express = require('express')
const app = express()
const { supplyOrderModel, salesOrderModel, customerModel } = require('../../../schemas')
const OrderProduct = app.post('/createSalesOrder', (req, res) => {
  
    supplyOrderModel.findById(req.body.supplyOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const SO_Status = result.Status;
            const SO_refNumber = result.refNumber;
            const CustomerID = result.customerId;
            const salesOrderedproducts = result.orderedProductId;
            //  Check wheteher sale order created or not 
            salesOrderModel.find({ supplyOrderId: req.body.supplyOrderId }, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    if (result === undefined || result.length == 0) {
                        console.log("empty")
                        customerModel.findById(CustomerID, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                const CustomerName = result.name;
                                const ContactPerson = result.contactPerson;
                                const PhoneNumber = result.phone;
                                if (SO_Status === 'Pending') {
                                    const newSalesOrder = new salesOrderModel({
                                        supplyOrderId: req.body.supplyOrderId,
                                        saleOrderState: 'Active',
                                        orderDeliveryStatus: req.body.orderDeliveryStatus,
                                        SO_refNumber: SO_refNumber,
                                        customerId: CustomerID,
                                        CustomerName: CustomerName,
                                        ContactPerson: ContactPerson,
                                        PhoneNumber: PhoneNumber,
                                        saleOrderProducts: salesOrderedproducts,
                                    })
                                    newSalesOrder.save((error, result) => {
                                        if (error) {
                                            res.send(error)
                                        } else {
                                            res.send(result)
                                            const updateData = {
                                                $push: {
                                                    salesOrderId: result._id,
                                                },
                                                SPCategory: "Confirmed Supply Order"
                                            }
                                            const options = {
                                                new: true
                                            }
                                            supplyOrderModel.findByIdAndUpdate(result.supplyOrderId, updateData, options, (error, result) => {
                                            })
                                        }
                                    })
                                } else if (SO_Status === 'Partial') {
                                    const newSalesOrder = new salesOrderModel({
                                        supplyOrderId: req.body.supplyOrderId,
                                        saleOrderState: 'Pending',
                                        orderDeliveryStatus: req.body.orderDeliveryStatus,
                                        SO_refNumber: SO_refNumber,
                                        customerId: CustomerID,
                                        CustomerName: CustomerName,
                                        ContactPerson: ContactPerson,
                                        PhoneNumber: PhoneNumber,
                                        saleOrderProducts: salesOrderedproducts

                                    })
                                    newSalesOrder.save((error, result) => {
                                        if (error) {
                                            res.send(error)
                                        } else {
                                            res.send(result)
                                            const updateData = {
                                                $push: {
                                                    salesOrderId: result._id,

                                                },
                                                SPCategory: "Confirmed Supply Order"

                                            }
                                            const options = {
                                                new: true
                                            }
                                            supplyOrderModel.findByIdAndUpdate(result.supplyOrderId, updateData, options, (error, result) => {
                                            })
                                        }
                                    })
                                } else {
                                    const newSalesOrder = new salesOrderModel({
                                        supplyOrderId: req.body.supplyOrderId,
                                        saleOrderState: 'Close',
                                        orderDeliveryStatus: req.body.orderDeliveryStatus,
                                        SO_refNumber: SO_refNumber,
                                        customerId: CustomerID,
                                        CustomerName: CustomerName,
                                        ContactPerson: ContactPerson,
                                        PhoneNumber: PhoneNumber,
                                        saleOrderProducts: salesOrderedproducts
                                    })
                                    newSalesOrder.save((error, result) => {
                                        if (error) {
                                            res.send(error)
                                        } else {
                                            res.send(result)
                                            const updateData = {
                                                $push: {
                                                    salesOrderId: result._id,
                                                },
                                                SPCategory: "Confirmed Supply Order"

                                            }
                                            const options = {
                                                new: true
                                            }
                                            supplyOrderModel.findByIdAndUpdate(result.supplyOrderId, updateData, options, (error, result) => {
                                            })
                                        }
                                    })
                                }
                            }
                        })

                    } else {
                        console.log("Not empty")
                        res.send('sale Order Already created for this supply order')
                    }
                }
            })
        }
    })

})
module.exports = OrderProduct