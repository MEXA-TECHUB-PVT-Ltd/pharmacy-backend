const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const CreateCompany = app.post('/addCompany', (req, res) => {
    const Company = new companyModel({
        companyName: req.body.companyName,
        companyAddress: req.body.companyAddress,
        zipCode: req.body.zipCode,
        phone: req.body.phone,
        fax: req.body.fax,
    })
    Company.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = CreateCompany