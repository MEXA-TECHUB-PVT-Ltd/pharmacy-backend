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
const companySchema = mongoose.Schema({
    companyName: String,
    companyAddress: String,
    zipCode:String,
    phone: String,
    fax: String,
})
const InvoiceSchema = mongoose.Schema({
    // customerId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'customer'
    // },staffMember
    typeOfInvoice: {
        type: String,
        enum: ['Tax Invoice', 'Cash Invoice']
    },
    supplyOrderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplyOrder'
    },
    invoiceNo:String,
    // supplyOrderNo:String,
    supplyOrderDate:String,
    SupplyOrderValid:String,
    SuplyRefNo:String,
    invoiceDate:String,
    dueDate:String,
    deliveryChallanNo:String,
    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staffMember'
    },
    bookedByName:String,
    deliveredBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staffMember'
    },
    deliveredByName:String,
    pickSummaryNo:String,
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    customerName:String,
    customerAddress:String,
    CustomerNTN:String,
    CustomerCNIC:String,
    CustomerPhone:String,
    CustomerSalesTaxRegNo:String,
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InvoiceProduct'
    }],
    // productDetail:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'product'
    // }],
    // productId:String,
    // productName:String,
    // packSize:String,
    // batchNo:String,
    // expiryDate:String,
    // quantity:String,
    // tradePrice:String,
    amountRs:String,
    // discountOnMRP:String,
    // discountOnTP:String,
    discountedAmount:String,
    salesTax:String,
    generalSalesTax:String,
    advanceTax:String,
    furtherTax:String,
    TotalTax:String,
    AmountIncTax:String,
    // invoiceValue:String,
    invoiceDiscount:String,
    invoiceSalesTax:String,
    invoiceGeneralSalesTax:String,
    invoiceAdvanceTax:String,
    invoiceFurtherTax:String,
    totalPayable:String,
    notes:String,

})
const InvoiceProductSchema = mongoose.Schema({
    InvoiceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    productName:String,
    companyName:String,
    packing:String,
    expiryDate:String,
    batchNo:String,
    ratePerUnit:String,
    quantity:String,
    amount:String,
    totalAmount:String
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
    salesTax:String,
    generalSalesTax:String,
    advanceTax:String,
    furtherTax:String,
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
    PhoneNumber:String,
    saleOrderProducts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderProduct'
    }],
    salePartsId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'saleOrderParts'
    }],
    saleOrderDate:String
})
const saleOrderPartsSchema = mongoose.Schema({
saleOrderId:{
    type: mongoose.Schema.Types.ObjectId,
        ref: 'salesOrder'
},
SO_refNumber:String,
productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'orderProduct'
},
productName:String,
companyName:String,
batchNo:String,     
amount:String,                  
quantity:String,
packSize:String,
customerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
},
CustomerName:String,
ContactPerson:String,
PhoneNumber:String,
totalAmountPayable:String

})
const orderProductSchema = mongoose.Schema({
    supplyOrderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplyOrder'
    },
    supplyOrderRefNo:String,
    SPCategory:String,
    SPtypeOforder:String,
    SPdateOfOrder:String,
    SPorderValidTill:String,
    SPspecialInstructions:String,
    SPStatus:String,
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    productName:String,
    companyName:String,
    packing:String,
    expiryDate:String,
    batchNo:String,
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
const companyModel = mongoose.model('company', companySchema, 'company')
const customerModel = mongoose.model('customer', customerSchema, 'customer')
const staffMemberModel = mongoose.model('staffMember', staffMemberSchema, 'staffMember')
const supplyOrderModel = mongoose.model('supplyOrder', supplyOrderSchema, 'supplyOrder')
const orderProductModel = mongoose.model('orderProduct', orderProductSchema, 'orderProduct')
const salesOrderModel = mongoose.model('salesOrder', salesOrderSchema, 'salesOrder')
const saleOrderPartsModel = mongoose.model('saleOrderParts', saleOrderPartsSchema, 'saleOrderParts')
const CalculateTaxModel = mongoose.model('CalculateTax', CalculateTaxSchema, 'CalculateTax')
const InvoiceModel = mongoose.model('Invoice', InvoiceSchema, 'Invoice')
const InvoiceProductModel = mongoose.model('InvoiceProduct', InvoiceProductSchema, 'InvoiceProduct')

module.exports = {
    productModel,
    companyModel,
    InvoiceModel,
    customerModel,
    staffMemberModel,
    supplyOrderModel,
    orderProductModel,
    salesOrderModel,
    CalculateTaxModel,
    saleOrderPartsModel,
    InvoiceProductModel

}