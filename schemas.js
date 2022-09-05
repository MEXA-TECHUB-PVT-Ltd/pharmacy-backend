const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    itemName: String,
    itemCode: String,
    packSize:String,
    registrationNo: String,
    genericName: String,
    companyName:String,
    expiryDate:String,
    batchNo:String,
    maxRetailPrice:String,
    tradePrice:String
})
const customerSchema = mongoose.Schema({
    typeOfCustomer:  {
        type: String,
        enum: ['Distributer', 'Retailer', 'Institution']
    },
    name: String,
    address:String,
    phone: String,
    contactPerson: String,
    cnicOfPropreitor:String,
    accountNumber:String,
    licenseNumber:String,
    salesTaxNumber:String,
    ntnNumber:String,
    applicabletax:String
})

const productModel = mongoose.model('product', productSchema, 'product')
const customerModel = mongoose.model('customer', customerSchema, 'customer')


module.exports = {
    productModel,
    customerModel
   


}