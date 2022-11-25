const express = require('express')
const app = express()
const { customerModel } = require('../../../schemas')

const RemoveCustomer = app.delete('/removeCustomer', (req, res) => {
    customerModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({
                message: "Deleted successfully"
            })
        }
    })
})
module.exports = RemoveCustomer