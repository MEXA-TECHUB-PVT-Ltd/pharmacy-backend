const express = require('express')
const app = express()
const moment = require('moment');
const { staffMemberModel } = require('../../schemas')

const CreateStaff = app.post('/addStaffMember', (req, res) => {
    const Createddate = req.body.employeeDob;

    const Staff = new staffMemberModel({
        employeeName: req.body.employeeName,
        employeeCnic: req.body.employeeCnic,
        employeeAge: req.body.employeeAge,
        employeeGender: req.body.employeeGender,
        employeeDob: moment(Createddate).format("DD/MM/YYYY"),
        employeeQualification: req.body.employeeQualification,
        employeeRoles: req.body.employeeRoles,
        attendenceRecord: req.body.attendenceRecord,
        Salaries: req.body.Salaries,

    })
    Staff.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                data: result,
                message: "Staff Member Created successfully"
            })
        }
    })

})
module.exports = CreateStaff