const express = require('express')
const app = express()
const { InvoiceModel, supplyOrderModel, staffMemberModel, customerModel } = require('../../../schemas')

const CreateInvoice = app.post('/addInvoice', (req, res) => {
    const SupplyOrderID = req.body.supplyOrderId;
    const StaffMemberID = req.body.staffMemberId;

    supplyOrderModel.findById(SupplyOrderID, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const InvoiceNo = result.refNumber
            const customerId = result.customerId._id
            const Products = result.orderedProductId
            staffMemberModel.findById(StaffMemberID, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const StaffName = result.employeeName
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
                                // console.log(Products)
                                const Invoice = new InvoiceModel({
                                    typeOfInvoice: req.body.typeOfInvoice,
                                    supplyOrderId: req.body.supplyOrderId,
                                    invoiceNo: InvoiceNo,
                                    invoiceDate: req.body.invoiceDate,
                                    dueDate: req.body.dueDate,
                                    deliveryChallanNo: req.body.deliveryChallanNo,
                                    bookedBy: StaffName,
                                    deliveredBy: req.body.deliveredBy,
                                    pickSummaryNo: req.body.pickSummaryNo,
                                    customerId: customerId,
                                    customerName: customerName,
                                    customerAddress: customerAddress,
                                    CustomerNTN: customerNTN,
                                    CustomerCNIC: customerCNIC,
                                    CustomerSalesTaxRegNo: customerSalestax,
                                    products: Products,
                                    salesTax:customerSalesTaxP,
                                    generalSalesTax:customerGeneralSalesTaxP,
                                    advanceTax:customerAdvanceTax,
                                    furtherTax:customerFurtherTax,

                                })
                                Invoice.save((error, result) => {
                                    if (error) {
                                        res.send(error)
                                    } else {
                                        res.send(result)
                                    }
                                })

                            }

                        }
                    }).populate("CalculateTaxId")

                }
            })

        }
    }).populate("salesOrderId").populate("orderedProductId").populate("customerId")


})
module.exports = CreateInvoice