const express = require('express')
const app = express()
const { productModel } = require('../../../schemas')

const RemoveProduct = app.delete('/removeProduct', (req, res) => {
    productModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveProduct