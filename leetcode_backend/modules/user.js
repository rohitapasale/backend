const { maxLength } = require("cookieparser");
const mongoose = require("mongoose");

const user_schema = mongoose.Schema(
    {
        username:
        {
            type:String,
            minLength:2,
            maxLength:20,
            required:true
        },
        submission:
        {
            type:Number,
            min:0,
            max:200000,
        },
        password:
        {
            type:String,
            min:7,
            max:30,
            required:true

        },
        year:
        {
            type:Number,
            min:1,
            max:4
        }

    }
)
const user = mongoose.model("user",user_schema);
module.exports = user;