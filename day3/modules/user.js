const mongoose = require("mongoose");

const user_schema = new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true,
            minLength:2,
            maxLength:12
        },
        age:
        {
            type:Number,
            min:12,
            max:60
        
        },
        password:
        {
            type:String,
            required:true,
            
        },
        email:
        {
            type:String,
            required:true
        },
        gender:
        {
            type:String,
            enum:["male","female","other"],
            
        }
    }
);
const user = mongoose.model("user",user_schema);
module.exports = user;