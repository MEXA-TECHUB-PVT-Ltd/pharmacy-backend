const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const UpdateCompany = app.put('/updateCompany', (req, res) => {
    const updateData = {
        companyName: req.body.companyName,
        companyAddress: req.body.companyAddress,
        zipCode: req.body.zipCode,
        phone: req.body.phone,
        fax: req.body.fax,
    }
    const options = {
        new: true
    }
    companyModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateCompany