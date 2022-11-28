const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')
const moment = require('moment');


const UpdateProduct = app.put('/updateStaff', (req, res) => {
    if (req.body.employeeDob === undefined) {
        const updateData = {
            employeeName: req.body.employeeName,
            employeeCnic: req.body.employeeCnic,
            employeeAge: req.body.employeeAge,
            employeeGender: req.body.employeeGender,
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
                res.json({
                    data: result,
                    message: "Updated successfully"
                })
            }
        })
    }else{
    const Createddate = req.body.employeeDob;
        const updateData = {
            employeeName: req.body.employeeName,
            employeeCnic: req.body.employeeCnic,
            employeeAge: req.body.employeeAge,
            employeeGender: req.body.employeeGender,
            employeeDob: moment(Createddate).format("DD/MM/YYYY"),
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
                res.json({
                    data: result,
                    message: "Updated successfully"
                })
            }
        })
    }
   
})
module.exports = UpdateProduct