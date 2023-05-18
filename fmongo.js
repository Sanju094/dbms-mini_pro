const express = require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/personal",{
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
        type:Number,
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
    cname:{
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
        type:Number,
        required:true
    },
    cno:{
        type:Number,
        required:true
    },
    mess:{
        type:String,
        required:true
    }
});
const collection = new mongoose.model("request",logindesign);
module.exports=collection;