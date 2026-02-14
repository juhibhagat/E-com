const mongoose = require("mongoose");
const dbConnection = require("../config/db");


const productSchema = new mongoose.Schema({
    Product_Id: {
        type: Number,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: false
    },
    Qty: {
        type: Number
    }

})

const product = mongoose.model("Product", productSchema);
module.exports = product;



