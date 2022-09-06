const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')

const CreateStaff = app.post('/addStaffMember', (req, res) => {
    const Staff = new staffMemberModel({
        employeeName: req.body.employeeName,
        employeeCnic: req.body.employeeCnic,
        employeeAge: req.body.employeeAge,
        employeeGender: req.body.employeeGender,
        employeeDob: req.body.employeeDob,
        employeeQualification: req.body.employeeQualification,
        employeeRoles: req.body.employeeRoles,
        attendenceRecord: req.body.attendenceRecord,
        Salaries: req.body.Salaries,

    })
    Staff.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = CreateStaff