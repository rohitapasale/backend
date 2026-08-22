const mongoose = require("mongoose");

const { Schema } = mongoose;

const users= new Schema({
   first_name :{
    type:String,

   },
   last_name:
   {
    type:String,
   },
   age:
   {
    type:Number
   },
   photo:
   {
    type:String,
   }
   
});

const exams = mongoose.model("exam", users);

module.exports = users;