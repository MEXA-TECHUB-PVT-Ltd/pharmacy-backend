const express = require('express')
const { staffMemberModel } = require('../../schemas')
const app = express()

const GetDeliveryStaff = app.get('/getAllDeliveryMan', (req, res) => {
    staffMemberModel.find({employeeRoles:"Delivery Man"}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetDeliveryStaff