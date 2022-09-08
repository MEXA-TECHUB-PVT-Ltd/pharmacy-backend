const express = require('express')
const app = express()
const { productModel} = require('../../../schemas')

const GetProduct = app.get('/getProduct', (req, res) => {
    productModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("maxRetailPrice")
})
module.exports = GetProduct