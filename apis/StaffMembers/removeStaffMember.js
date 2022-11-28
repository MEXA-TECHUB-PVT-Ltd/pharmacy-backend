const express = require('express')
const app = express()
const { staffMemberModel } = require('../../schemas')


const RemoveProduct = app.delete('/removeStaff', (req, res) => {
    staffMemberModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({ message: "Deleted Successfully" })
        }
    })
})
module.exports = RemoveProduct