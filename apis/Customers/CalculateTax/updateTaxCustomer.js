const express = require('express')
const app = express()
const { CalculateTaxModel,customerModel} = require('../../../schemas')

const UpdateTaxCustomer = app.put('/updateTaxCustomer', (req, res) => {
    if (req.body.salesTax === undefined || req.body.salesTax === '' || req.body.generalSalesTax === undefined || req.body.generalSalesTax === '' || req.body.advanceTax === undefined || req.body.advanceTax === '' || req.body.furtherTax === undefined || req.body.furtherTax === '') {
        res.json({ message: "Please fill all fields to continue" })
    } else {
        const totalTax = parseInt(req.body.salesTax) + parseInt(req.body.generalSalesTax) + parseInt(req.body.advanceTax) + parseInt(req.body.furtherTax);
    const updateData = {
        salesTax: req.body.salesTax,
        generalSalesTax: req.body.generalSalesTax,
        advanceTax: req.body.advanceTax,
        furtherTax: req.body.furtherTax,
        totalTax: totalTax
    }
    const options = {
        new: true
    }
    CalculateTaxModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                message: "Updated successfully"
            })
            const CustomerId= result.customerId
            const updateData = {
                applicabletax: totalTax,
                salesTax: req.body.salesTax,
                generalSalesTax: req.body.generalSalesTax,
                advanceTax: req.body.advanceTax,
                furtherTax: req.body.furtherTax,
            }
            
            const options = {
                new: true
            }
            customerModel.findByIdAndUpdate(CustomerId, updateData, options, (error, result) => {
            })
        }
    })
    }
    
})
module.exports = UpdateTaxCustomer