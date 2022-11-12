const express = require('express')
const app = express()
const { customerModel } = require('../../../schemas')

const CreateCustomer = app.post('/addCustomer', (req, res) => {
    const customer = new customerModel({
        typeOfCustomer: req.body.typeOfCustomer,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        contactPerson: req.body.contactPerson,
        cnicOfPropreitor: req.body.cnicOfPropreitor,
        accountNumber: req.body.accountNumber,
        licenseNumber: req.body.licenseNumber,
        salesTaxNumber: req.body.salesTaxNumber,
        ntnNumber: req.body.ntnNumber,
        applicabletax: "",
        CalculateTaxId: [],
        salesTax: 0,
        generalSalesTax: 0,
        advanceTax: 0,
        furtherTax: 0,

    })
    customer.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = CreateCustomer