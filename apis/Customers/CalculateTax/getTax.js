const express = require('express')
const { CalculateTaxModel } = require('../../../schemas')
const app = express()

const GetTaxCustomer = app.get('/getCustomerTax', (req, res) => {
    CalculateTaxModel.find({customerId: req.query.customerId }, (error, result) => {
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
module.exports = GetTaxCustomer