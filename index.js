require("./db/conn");
const PORT = 4000
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
 

app.get('/', function(req, res){
    res.send('<h1>Working</h1>')
})
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Inventory APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/inventory',
    require('./apis/Inventory/Products/addProduct'),
    require('./apis/Inventory/Products/removeProduct'),
    require('./apis/Inventory/Products/viewProduct'),
    require('./apis/Inventory/Products/getAllProducts'),
    require('./apis/Inventory/Products/updateProduct'),


)
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Customer APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/customer',
    require('./apis/Customers/crud/addCustomer'),
    require('./apis/Customers/crud/deleteCustomer'),
    require('./apis/Customers/crud/editCustomer'),
    require('./apis/Customers/crud/viewAllCustomers'),
    require('./apis/Customers/crud/viewCustomer'),






)
   
app.listen(PORT, () => {
    console.log(`Server is started in PORT no ${PORT}`)
});