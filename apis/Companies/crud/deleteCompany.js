const express = require('express')
const app = express()
const { companyModel } = require('../../../schemas')

const RemoveCompany = app.delete('/removeCompany', (req, res) => {
    companyModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json({ message: "Deleted Successfully" })

        }
    })
})
module.exports = RemoveCompany