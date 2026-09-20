const mongoose = require("mongoose");


const user_schema = new mongoose.Schema(
    {

        name:
        {
            type:String,
            minLength:2,
            maxLength:15,
            required:true
        },
        age:
        {
            type:Number,
            min:10,
            max:100,
            required:true,

        },
        gender:
        {
            type:String,
    
            enum:["male","female","other"]
        },
        salary:
        {
            type:Number,
            min:1000,
            max:100000
        },
        password:
        {
            type:String
        }

    }
);
const user = mongoose.model("user_details",user_schema);
module.exports = user