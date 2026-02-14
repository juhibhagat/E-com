const express = require("express");
const product = require("../models/product");
const productRoute = express.Router()

productRoute.get("/",async (req, res)=>{
    try{
        const products = await product.find();
        res.status(200).json({message: "all product fetch", products});
        
    }catch(error){
        res.status(500).json({message: error})
    }

})

productRoute.post("/", async(req, res)=>{
    try{
      const NewProduct = new product(req.body);
      const Product = await NewProduct.save();
      res.status(201).json({message: "Product Created", Product});
    }catch(error){
        res.status(500).json({message: error.message});
    }
})


module.exports = productRoute;