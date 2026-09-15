const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const student_schema =  new Schema(
    {
        name:
        {
           type:String,
           minLength:2,
           maxLength:20,
           required:true
        },
        age:
        {
            type:Number,
            min:6,
            max:100

        },
        class:
        {
            type:Number,
            min:1,
            max:12

        },
        password:
        {
            type:String,
            minLength:5,
            required:true
        }
    }
)
const student = mongoose.model("student",student_schema);
module.exports = student ;