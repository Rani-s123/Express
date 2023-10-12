const mongoose = require('mongoose');

const applys =new  mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    caste:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    letter:{
        type:String,
        require:true
    }

  })

  const register =new mongoose.model("register",applys);

  module.exports=register

  