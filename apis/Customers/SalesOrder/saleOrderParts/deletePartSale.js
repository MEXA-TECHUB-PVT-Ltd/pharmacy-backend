const express = require('express')
const app = express()
const {saleOrderPartsModel } = require('../../../../schemas')

const RemovePartDelete = app.delete('/removeSaleOrderPart', (req, res) => {
    saleOrderPartsModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemovePartDelete