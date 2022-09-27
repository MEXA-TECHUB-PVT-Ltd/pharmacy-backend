const express = require('express')
const app = express()
const { InvoiceModel, supplyOrderModel, staffMemberModel, customerModel, saleOrderPartsModel } = require('../../../schemas')

const CreateInvoice = app.post('/addInvoice', (req, res) => {
    let InvoiceNoData = Math.floor((Math.random() * 100000) + 1);
    const SupplyOrderID = req.body.supplyOrderId;
    const bookedBy = req.body.bookedBy;
    const deliveredBy = req.body.deliveredBy;


    supplyOrderModel.findById(SupplyOrderID, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const InvoiceNo = InvoiceNoData
            const SuplyRefNo =result.refNumber
            const customerId = result.customerId._id
            const SupplyOrderValid=result.orderValidTill
            // const Products = result.orderedProductId
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
                                    const TotalTax = result.applicabletax
                                    const CustomerPhone = result.phone

                                    if (CalculateTax === undefined || CalculateTax.length === 0) {
                                        console.log("empty")
                                        res.send("Tax Not Added for that Customer")
                                    } else {
                                        console.log(" Not empty")
                                        const customerSalesTaxP = result.CalculateTaxId[0].salesTax
                                        const customerGeneralSalesTaxP = result.CalculateTaxId[0].generalSalesTax
                                        const customerAdvanceTax = result.CalculateTaxId[0].advanceTax
                                        const customerFurtherTax = result.CalculateTaxId[0].furtherTax
                                        // Calculate Discount
                                        const invoiceDiscount = req.body.invoiceDiscount

                                        // res.send(Products)
                                        const Invoice = new InvoiceModel({
                                            typeOfInvoice: req.body.typeOfInvoice,
                                            supplyOrderId: req.body.supplyOrderId,
                                            SuplyRefNo:SuplyRefNo,
                                            SupplyOrderValid:SupplyOrderValid,
                                            invoiceNo: InvoiceNo,
                                            supplyOrderDate: supplyOrderDate,
                                            invoiceDate: req.body.invoiceDate,
                                            dueDate: req.body.dueDate,
                                            deliveryChallanNo: req.body.deliveryChallanNo,
                                            bookedBy: req.body.bookedBy,
                                            bookedByName: bookedByName,
                                            deliveredBy: req.body.deliveredBy,
                                            deliveredByName: DeliveredByName,
                                            pickSummaryNo: req.body.pickSummaryNo,
                                            customerId: customerId,
                                            customerName: customerName,
                                            customerAddress: customerAddress,
                                            CustomerNTN: customerNTN,
                                            CustomerPhone: CustomerPhone,
                                            CustomerCNIC: customerCNIC,
                                            CustomerSalesTaxRegNo: customerSalestax,
                                            products: [],
                                            salesTax: customerSalesTaxP,
                                            generalSalesTax: customerGeneralSalesTaxP,
                                            advanceTax: customerAdvanceTax,
                                            furtherTax: customerFurtherTax,
                                            TotalTax: TotalTax,
                                            AmountIncTax: 0,
                                            invoiceDiscount: invoiceDiscount,
                                            invoiceSalesTax: customerSalesTaxP,
                                            invoiceGeneralSalesTax: customerGeneralSalesTaxP,
                                            invoiceAdvanceTax: customerAdvanceTax,
                                            invoiceFurtherTax: customerFurtherTax,
                                            discountedAmount: 0,
                                            totalPayable: 0,
                                            notes: req.body.notes,
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
            })
          
        }
    }).populate("orderedProductId").populate("customerId")


})
module.exports = CreateInvoice