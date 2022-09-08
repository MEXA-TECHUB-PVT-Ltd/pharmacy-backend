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
    maxRetailPrice:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MRP'
    }],
})
const MRPSchema = mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    MRPprice:String,
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
const staffMemberSchema = mongoose.Schema({
    
    employeeName: String,
    employeeCnic:String,
    employeeAge: String,
    employeeGender: String,
    employeeDob:String,
    employeeQualification:String,
    employeeRoles:  {
        type: String,
        enum: ['Manager', 'Staff', 'Delivery Man','Sales Man']
    },
    attendenceRecord:String,
    Salaries:String,
})
const productModel = mongoose.model('product', productSchema, 'product')
const customerModel = mongoose.model('customer', customerSchema, 'customer')
const staffMemberModel = mongoose.model('staffMember', staffMemberSchema, 'staffMember')
const MRPModel = mongoose.model('MRP', MRPSchema, 'MRP')




module.exports = {
    productModel,
    customerModel,
    staffMemberModel,
    MRPModel
   


}