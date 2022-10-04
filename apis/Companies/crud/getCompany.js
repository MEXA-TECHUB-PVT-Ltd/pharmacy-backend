const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const GetCompany = app.get('/getCompany', (req, res) => {
    companyModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetCompany