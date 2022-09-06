const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')


const RemoveProduct = app.delete('/removeStaff', (req, res) => {
    staffMemberModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveProduct