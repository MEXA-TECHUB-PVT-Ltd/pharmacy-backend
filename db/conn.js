const mongoose =require("mongoose");

const DB= "mongodb+srv://fairyqueen214:FAIRYQUin214@cluster0.kyo3a.mongodb.net/pharmacyyyyyyy?retryWrites=true&w=majority"
// const DB="mongodb+srv://holgatallc:holgatallc@cluster0.a38bnda.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection started")).catch((error)=>console.log(error))