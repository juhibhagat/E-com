const mongoose = require("mongoose");
const dbConnection = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Ecom-1');
        console.log(`Database connected Successfully`);
    }catch(error){
        console.log("Database connection Failed", error.message);
    }
}



module.exports = dbConnection;