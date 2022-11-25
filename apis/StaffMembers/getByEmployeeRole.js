const express = require('express')
const { staffMemberModel } = require('../../schemas')
const app = express()

const GetSalesStaff = app.get('/get-by-employee-roles', (req, res) => {
    staffMemberModel.find({employeeRoles:req.body.employeeRoles}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                count:result.length
            })
        }
    })
})
module.exports = GetSalesStaff