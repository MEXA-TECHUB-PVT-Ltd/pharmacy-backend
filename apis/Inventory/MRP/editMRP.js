const express = require('express')
const app = express()
const { MRPModel } = require('../../../schemas')

const UpdateCustomer = app.put('/updateMRP', (req, res) => {
    const maxRetailPrice= req.body.MRPprice;
    const tradePrice=maxRetailPrice*0.85;
    MRPModel.find({ productId: req.body.productId, customerId: req.body.customerId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const MRPId = result[0]._id;
            const updateData = {
                MRPprice: req.body.MRPprice,
                tradePrice: tradePrice
            }

            const options = {
                new: true
            }
            MRPModel.findByIdAndUpdate(MRPId, updateData, options, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        }
    })

})
module.exports = UpdateCustomer