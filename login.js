const mongoose = require('mongoose');

const contain =new  mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  })

  const login =new mongoose.model("login",contain);

  module.exports=login