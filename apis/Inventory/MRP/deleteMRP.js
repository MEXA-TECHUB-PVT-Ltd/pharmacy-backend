const express = require('express')
const app = express()
const { MRPModel } = require('../../../schemas')

const RemoveMRP = app.delete('/removeMRP', (req, res) => {
    MRPModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = RemoveMRP