const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const GetAllCompany = app.get('/getAllCompanies', (req, res) => {
    companyModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllCompany