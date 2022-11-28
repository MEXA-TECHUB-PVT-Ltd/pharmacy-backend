const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')

const GetProduct = app.get('/getStaff', (req, res) => {
    staffMemberModel.findById(req.query._id, (error, result) => {
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
module.exports = GetProduct