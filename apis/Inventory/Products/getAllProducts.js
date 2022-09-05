const express = require('express')
const app = express()
const { productModel } = require('../../../schemas')

const GetAllProducts = app.get('/getAllProducts', (req, res) => {
    productModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllProducts