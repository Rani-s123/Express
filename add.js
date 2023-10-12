const mongoose = require('mongoose');

const apply =new  mongoose.Schema({
    jobtitle:{
      type:String,
      required:true
    },
    jobdescription:{
      type:String,
      required:true
    },
    joblocation:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    application:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        require:true
    }

  })

  const addjob =new mongoose.model("addjob",apply);

  module.exports=addjob
