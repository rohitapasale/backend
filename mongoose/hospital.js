const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const hosptial_scehma = new Schema(
    {
        name:
        {
            type:String,
            minLength:3,
            maxLength:20,
            required:true,

            
        },
        age:
        {
            type:Number,
          validate:{
           validator: (value)=>
           {
            return value>=10&&value<=100;
           },
           message : "go in other hospital;"
          }

        },
     disease:
     {
        type:String,
        minLength:3,
        maxLength:100
     },
     gender:
     {
        type:String,
        minLength:4,
        maxLength:10,
        enum : ["male","female","others"],
        required:true

     }

    }
)
const hospital = mongoose.model("hospital",hosptial_scehma);
module.exports = hospital ;