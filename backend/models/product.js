const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Product_Id: {
        type: Number,
        required: true,
        unique: true

    },
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: false
    },
    Qty: {
        type: Number
    }

},
{
    timestamps: true
}
)

const product = mongoose.model("Product", productSchema);
module.exports = product;