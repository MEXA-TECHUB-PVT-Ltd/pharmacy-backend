const express = require('express')
const app = express()
const { orderProductModel} = require('../../../schemas')

const GetOrderProduct = app.get('/getOrderProduct', (req, res) => {
    orderProductModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
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
module.exports = GetOrderProduct