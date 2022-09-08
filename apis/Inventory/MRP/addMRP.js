const express = require('express')
const app = express()
const { MRPModel, productModel, customerModel } = require('../../../schemas')

const CreateMRP = app.post('/addMRP', (req, res) => {
    const maxRetailPrice = req.body.MRPprice;
    const tradePrice = maxRetailPrice * 0.85;
    customerModel.findById(req.body.customerId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const customerName=result.name
            const customerType=result.typeOfCustomer

            const MRP = new MRPModel({
                productId: req.body.productId,
                customerId: req.body.customerId,
                customerName:customerName,
                customerType:customerType,
                MRPprice: req.body.MRPprice,
                tradePrice: tradePrice,
        
            })
            MRP.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    const updateData = {
                        $push: {
                            maxRetailPrice: result._id,
                        }
                    }
                    const options = {
                        new: true
                    }
                    productModel.findByIdAndUpdate(req.body.productId, updateData, options, (error, result) => {
                    })
                }
            })
        }
    })
   

})
module.exports = CreateMRP