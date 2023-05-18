const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/install",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesign=new mongoose.Schema({
    amount:{
        type:String,
        required:true
    },
    intal:{
        type:String,
        required:true
    },
    inte:{
        type:String,
        required:true
    },
    
   
});
const collection = new mongoose.model("amount",logindesign);
module.exports=collection;