const { maxLength } = require("cookieparser");
const mongoose = require("mongoose");
const student_schema = mongoose.Schema(
    {
        name:
        {
            type:String,
            minLength:2,
            maxLength:15,
            required:true
        },
        course:
        {
            type:String,
            minLength:2,
            maxLength:14

        },
        password:
        {
            type:String,
            required:true
        },
        duration:
        {
            type:Number,
            min:2,
            max:4
        }

    }
)
const student = mongoose.model("studnet",student_schema);

module.exports = student ;