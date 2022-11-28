const express = require('express')
const app = express()
const { productModel} = require('../../../schemas')

const GetProduct = app.get('/getProduct', (req, res) => {
    productModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            if(result===null){
                res.json({
                    data: result,
                    message: "No Record for this id "
                })
            }else{
                res.json({
                    data: result,
                    message: "Found successfully"
                })
            }
            
        }
    })
})
module.exports = GetProduct