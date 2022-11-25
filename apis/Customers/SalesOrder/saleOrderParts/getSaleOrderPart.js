const express = require('express')
const app = express()
const { saleOrderPartsModel} = require('../../../../schemas')

const GetSale = app.get('/GetOneSale', (req, res) => {
    saleOrderPartsModel.findById(req.query._id, (error, result) => {
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
    }).populate("productId")
})
module.exports = GetSale