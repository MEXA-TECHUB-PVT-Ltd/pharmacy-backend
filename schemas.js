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
    customerName:String,
    customerType:String,
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
    applicabletax:String,
    CalculateTaxId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CalculateTax'
    }]
})
const CalculateTaxSchema = mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    salesTax:String,
    generalSalesTax:String,
    advanceTax:String,
    furtherTax:String,
    totalTax:String

})
const supplyOrderSchema = mongoose.Schema({
    SPCategory:  {
        type: String,
        enum: ['Advanced Supply Order', 'Confirmed Supply Order']
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    refNumber:String,
    typeOforder: {
        type: String,
        enum: ['Market', 'Institutional','Others']
    },
    dateOfOrder:String,
    orderValidTill:String,
    specialInstructions:String,
    orderedProductId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderProduct'
    }],
    Status: {
        type: String,
        enum: ['Pending', 'Partial','Completed']
    },
    salesOrderId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'salesOrder'
    }]
})
const salesOrderSchema = mongoose.Schema({
    supplyOrderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplyOrder'
    },
    saleOrderState: {
        type: String,
        enum: ['Active', 'Pending','Close']
    },
    orderDeliveryStatus: {
        type: String,
        enum: ['Processing', 'Dispatched','Delivered']
    },
    SO_refNumber:String,
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    CustomerName:String,
    ContactPerson:String,
    PhoneNumber:String
})
const orderProductSchema = mongoose.Schema({
    supplyOrderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplyOrder'
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    productName:String,
    companyName:String,
    packing:String,
    ratePerUnit:String,
    quantity:String,
    amount:String,
    totalAmount:String
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
const supplyOrderModel = mongoose.model('supplyOrder', supplyOrderSchema, 'supplyOrder')
const orderProductModel = mongoose.model('orderProduct', orderProductSchema, 'orderProduct')
const salesOrderModel = mongoose.model('salesOrder', salesOrderSchema, 'salesOrder')
const CalculateTaxModel = mongoose.model('CalculateTax', CalculateTaxSchema, 'CalculateTax')


module.exports = {
    productModel,
    customerModel,
    staffMemberModel,
    MRPModel,
    supplyOrderModel,
    orderProductModel,
    salesOrderModel,
    CalculateTaxModel

}