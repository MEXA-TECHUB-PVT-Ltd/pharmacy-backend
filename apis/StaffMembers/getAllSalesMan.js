const express = require('express')
const { staffMemberModel } = require('../../schemas')
const app = express()

const GetSalesStaff = app.get('/getAllSalesMan', (req, res) => {
    staffMemberModel.find({employeeRoles:"Sales Man"}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetSalesStaff