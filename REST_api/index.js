const express= require("express");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");
const app= express();

mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongoDB")
}).catch((err)=>{
    console.log(err)
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
const prodSchema= new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
})
const Product = new mongoose.model("Product",prodSchema);   



app.post("/api/v1/product/new",async(req,res)=>{                        //create
    await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
})        



app.post("/api/v1/products",async(req,res)=>{                        //read
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
})  



app.post("/api/v1/product/:id",async(req,res)=>{                        //update
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true, useFindAndModify:false,runValidators:true})
    res.status(200).json({
        success:true,
        product
    })
})  


app.post("/api/v1/product/:id",async(req,res)=>{                        //Delete
    const product = await Product.findById(req.params.id);
if(!product){
    return res.status(500).json({
        success:false,
        message:"product not found"
    })
}
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product is deleted successfully"
    })
})  


app.listen(4500,()=>{
    console.log("server is working")
})
