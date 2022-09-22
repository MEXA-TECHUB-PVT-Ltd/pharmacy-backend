const express = require('express')
const app = express()
const { InvoiceModel, supplyOrderModel, staffMemberModel, customerModel } = require('../../../schemas')

const CreateInvoice = app.post('/addInvoice', (req, res) => {
    let InvoiceNoData = Math.floor((Math.random() * 100000) + 1);
    const SupplyOrderID = req.body.supplyOrderId;
    const bookedBy = req.body.bookedBy;
    const deliveredBy = req.body.deliveredBy;


    supplyOrderModel.findById(SupplyOrderID, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
            const InvoiceNo = InvoiceNoData
            const customerId = result.customerId._id
            const Products = result.orderedProductId
            const supplyOrderDate = result.dateOfOrder

            staffMemberModel.findById(bookedBy, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const bookedByName = result.employeeName
                    staffMemberModel.findById(deliveredBy, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            // res.send(result)
                            const DeliveredByName = result.employeeName

                            customerModel.findById(customerId, (error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    // res.send(result)
                                    const customerName = result.name
                                    const customerAddress = result.address
                                    const customerNTN = result.ntnNumber
                                    const customerCNIC = result.cnicOfPropreitor
                                    const customerSalestax = result.salesTaxNumber
                                    const CalculateTax = result.CalculateTaxId

                                    if (CalculateTax === undefined || CalculateTax.length === 0) {
                                        console.log("empty")
                                        res.send("Tax Not Added for that Customer")
                                    } else {
                                        console.log(" Not empty")
                                        const customerSalesTaxP = result.CalculateTaxId[0].salesTax
                                        const customerGeneralSalesTaxP = result.CalculateTaxId[0].generalSalesTax
                                        const customerAdvanceTax = result.CalculateTaxId[0].advanceTax
                                        const customerFurtherTax = result.CalculateTaxId[0].furtherTax
                                        const AmountIncTax = result.CalculateTaxId[0].totalTax
                                        // Calculate Discount
                                        const invoiceDiscount =req.body.invoiceDiscount

                                        // res.send(Products)
                                    //     const Invoice = new InvoiceModel({
                                    //         typeOfInvoice: req.body.typeOfInvoice,
                                    //         supplyOrderId: req.body.supplyOrderId,
                                    //         invoiceNo: InvoiceNo,
                                    //         supplyOrderDate:supplyOrderDate,
                                    //         invoiceDate: req.body.invoiceDate,
                                    //         dueDate: req.body.dueDate,
                                    //         deliveryChallanNo: req.body.deliveryChallanNo,
                                    //         bookedBy: StaffName,
                                    //         bookedByName: StaffName,

                                    //         deliveredBy: req.body.deliveredBy,
                                    //         deliveredByName: req.body.deliveredBy,

                                    //         pickSummaryNo: req.body.pickSummaryNo,
                                    //         customerId: customerId,
                                    //         customerName: customerName,
                                    //         customerAddress: customerAddress,
                                    //         CustomerNTN: customerNTN,
                                    //         CustomerCNIC: customerCNIC,
                                    //         CustomerSalesTaxRegNo: customerSalestax,
                                    //         $push: {
                                    //             products: Products,
                                    //         },
                                    //         // productDetail: req.body.productDetail,
                                    //         salesTax: customerSalesTaxP,
                                    //         generalSalesTax: customerGeneralSalesTaxP,
                                    //         advanceTax: customerAdvanceTax,
                                    //         furtherTax: customerFurtherTax,

                                    //         AmountIncTax: AmountIncTax,
                                    //         invoiceValue: req.body.invoiceValue,
                                    //         invoiceDiscount: req.body.invoiceDiscount,
                                    //         invoiceSalesTax: customerSalesTaxP,
                                    //         invoiceGeneralSalesTax:customerGeneralSalesTaxP,
                                    //         invoiceAdvanceTax: customerAdvanceTax,
                                    //         invoiceFurtherTax: customerFurtherTax,
                                    //         totalPayable: req.body.totalPayable,
                                    //         notes: req.body.notes,

                                    //     })
                                    //     Invoice.save((error, result) => {
                                    //         if (error) {
                                    //             res.send(error)
                                    //         } else {
                                    //             res.send(result)
                                    //         }
                                    //     })

                                    }

                                }
                            }).populate("CalculateTaxId")
                        }
                    })

                }
            })

        }
    }).populate("salesOrderId").populate("orderedProductId").populate("customerId")


})
module.exports = CreateInvoice