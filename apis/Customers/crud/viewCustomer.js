const express = require('express')
const app = express()
const { customerModel} = require('../../../schemas')

const GetCustomer = app.get('/getCustomer', (req, res) => {
    customerModel.findById(req.query._id, (error, result) => {
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
    }).populate("CalculateTaxId")
})
module.exports = GetCustomer