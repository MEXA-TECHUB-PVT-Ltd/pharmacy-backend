const express = require('express')
const app = express()
const { productModel, CalculateTaxModel, customerModel } = require('../../../schemas')

const CreateTaxCustomer = app.post('/addTaxCustomer', (req, res) => {
    customerModel.findById(req.body.customerId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result.CalculateTaxId === undefined || result.CalculateTaxId.length == 0) {
                const totalTax = parseInt(req.body.salesTax) + parseInt(req.body.generalSalesTax) + parseInt(req.body.advanceTax) + parseInt(req.body.furtherTax);
                const TaxCustomer = new CalculateTaxModel({
                    customerId: req.body.customerId,
                    salesTax: req.body.salesTax,
                    generalSalesTax: req.body.generalSalesTax,
                    advanceTax: req.body.advanceTax,
                    furtherTax: req.body.furtherTax,
                    totalTax: totalTax

                })
                TaxCustomer.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                        const updateData = {
                            $push: {
                                CalculateTaxId: result._id,
                            },
                            salesTax: req.body.salesTax,
                            generalSalesTax: req.body.generalSalesTax,
                            advanceTax: req.body.advanceTax,
                            furtherTax: req.body.furtherTax,
                            applicabletax: totalTax
                        }
                        const options = {
                            new: true
                        }
                        customerModel.findByIdAndUpdate(req.body.customerId, updateData, options, (error, result) => {
                        })
                    }
                })
            } else {
                res.send("Tax Already Added for this Customer")
            }
        }
    })


})
module.exports = CreateTaxCustomer