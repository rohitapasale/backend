const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
    {
        username:
        {
            type:String,
            minLength:2,
            maxLength:16,
            required:true
        },
        gender:{
            type:String,
            

        },
        age:
        {
            type:Number,
            min:10,
            max:70,
            required:true
        },
        bio:
        {
            type:String,
            maxLength:30
        },
        password:
        {
            type:String,
            require:true
        }

    }
);
const user = mongoose.model("insta_user",user_schema);
module.exports = user ;