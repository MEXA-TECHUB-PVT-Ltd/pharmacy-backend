const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')


const GetAllProducts = app.get('/getAllStaff', (req, res) => {
    staffMemberModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllProducts