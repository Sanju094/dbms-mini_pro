const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/jewellery",{
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
    fname:{
        type:String,
        required:true
    },
    mno:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    prof:{
        type:String,
        required:true
    },
    comname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    em:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    
    inc:{
        type:String,
        required:true
    },
    cnum:{
        type:String,
        required:true
    },
    tyoj:{
        type:String,
        required:true
    },
    carot:{
        type:Number,
        required:true
    },
    gram:{
        type:Number,
        required:true
    },
    hall:{
        type:String,
        required:true
    },
    amoreq:{
        type:Number,
        required:true
    },
    insreq:{
        type:String,
        required:true
    },
    intreq:{
        type:Number,
        required:true
    }
    
   
});
const collection = new mongoose.model("jeweldetails",logindesign);
module.exports=collection;