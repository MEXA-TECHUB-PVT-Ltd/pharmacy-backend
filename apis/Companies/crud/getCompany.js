const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const GetCompany = app.get('/getCompany', (req, res) => {
    companyModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if(result===null){
                res.json({
                    data: result,
                    message: "No Record for this id "
                })
            }else{
                res.json({
                    data: result,
                    message: "Found successfully"
                })
            }
        }
    })
})
module.exports = GetCompany