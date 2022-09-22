const express = require('express')
const app = express()
const { saleOrderPartsModel, salesOrderModel, productModel } = require('../../../../schemas')

const CreateSaleOrderPart = app.post('/addSaleOrderPart', (req, res) => {
    const saleOrderId = req.body.saleOrderId
    const productIdSales= req.body.productId
    salesOrderModel.findById(saleOrderId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
            const SO_ref = result.SO_refNumber;
            const customerId = result.customerId;
            const CustomerName = result.CustomerName;
            const ContactPerson = result.ContactPerson;
            const PhoneNumber = result.PhoneNumber;
                    // const SaleOrderPart = new saleOrderPartsModel({
                    //     saleOrderId: req.body.saleOrderId,
                    //     SO_refNumber: SO_ref,
                    //     productId:req.body.productId,
                    //     productName:req.body.productName,
                    //     companyName:req.body.companyName,
                    //     batchNo:req.body.batchNo,
                    //     quantity: req.body.quantity,
                    //     packSize: req.body.packSize,
                    //     customerId: customerId,
                    //     CustomerName: CustomerName,
                    //     ContactPerson: ContactPerson,
                    //     PhoneNumber: PhoneNumber
                    // },
                    // )
                    // SaleOrderPart.save((error, result) => {
                    //     if (error) {
                    //         res.send(error)
                    //     } else {
                    //         res.send(result)
                    //         const updateData = {
                    //             $push: {
                    //                 salePartsId: result._id,
                    //             },
                    //         }
                    //         const options = {
                    //             new: true
                    //         }
                    //         salesOrderModel.findByIdAndUpdate(result.saleOrderId, updateData, options, (error, result) => {
                    //         })
                    //     }
                    // })
        }
    }).populate("saleOrderProducts")
})
module.exports = CreateSaleOrderPart