const mongoose = require("mongoose");

const student_schema = new mongoose.Schema(
    {
        name:
        {
            type:String,
            minLength:2,
            maxLength:15,
            required:true
        },
        class:
        {
            type:Number,
            min:1,
            max:10,
            required:true
        },
        height:
        {
            type:String,
            minLength:1,
            maxLength:4
        },
        weight:
        {
            type:String,
            minLength:2,
            maxLength:4
        },
        password:
        {
            type:String,
            required:true
        }
    }
)
const student = mongoose.model("student",student_schema);
module.exports = student;