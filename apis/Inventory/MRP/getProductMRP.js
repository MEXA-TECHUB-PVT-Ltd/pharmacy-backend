const express = require('express')
const { MRPModel } = require('../../../schemas')
const app = express()

const GetUserProfile = app.get('/getProductMRP', (req, res) => {
    MRPModel.find({productId: req.query.productId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserProfile