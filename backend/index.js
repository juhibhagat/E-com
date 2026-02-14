const express = require("express");
const productRoute = require("./routes/productRoute");
const dbConnection = require("./config/db");
const app = express()

app.use(express.json());

dbConnection();

app.use("/product", productRoute);


app.listen(5000, ()=>{
    try{
        console.log(`server is running: http://localhost:5000`)
    }catch(error){
        console.log(error)
    }
    
})