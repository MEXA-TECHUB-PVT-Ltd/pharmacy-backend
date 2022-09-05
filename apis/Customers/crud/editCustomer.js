const express = require('express')
const app = express()
const { customerModel } = require('../../../schemas')

const UpdateCustomer = app.put('/updateCustomer', (req, res) => {
    const updateData = {
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
        applicabletax: req.body.applicabletax,
    }
    const options = {
        new: true
    }
    customerModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateCustomer