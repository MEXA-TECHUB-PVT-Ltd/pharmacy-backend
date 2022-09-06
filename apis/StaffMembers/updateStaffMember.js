const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')


const UpdateProduct = app.put('/updateStaff', (req, res) => {
    const updateData = {
        employeeName: req.body.employeeName,
        employeeCnic: req.body.employeeCnic,
        employeeAge: req.body.employeeAge,
        employeeGender: req.body.employeeGender,
        employeeDob: req.body.employeeDob,
        employeeQualification: req.body.employeeQualification,
        employeeRoles: req.body.employeeRoles,
        attendenceRecord: req.body.attendenceRecord,
        Salaries: req.body.Salaries,
    }
    const options = {
        new: true
    }
    staffMemberModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateProduct