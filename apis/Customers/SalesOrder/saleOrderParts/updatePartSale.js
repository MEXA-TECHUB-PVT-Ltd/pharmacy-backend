const express = require('express')
const app = express()
const { saleOrderPartsModel } = require('../../../../schemas')

const UpdateSaleOrderPart = app.put('/updateSaleOrderPart', (req, res) => {
    const updateData = {
        quantity: req.body.quantity,
        packSize: req.body.packSize,
    }
    const options = {
        new: true
    }
    saleOrderPartsModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                message:"Updated successfully"
            })
        }
    })
})
module.exports = UpdateSaleOrderPart