const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");
require("dotenv").config();
const {Schema} = mongoose


const url = process.env.url; 

async function main()
{
    const temp = url + "stdudents";
    try{
        await mongoose.connect(temp)
        console.log("db connected");
        const std_schema = new Schema(
            {
                name:String,
                age:Number,
                marks:Number
            }
        );
        const user =  mongoose.model("user",std_schema);
      await   user.create(
            {
                name:"rohit",
                age:20,
                marks:90
            }
        )
        const user1 = new user(
            {
                name:"vaibhav",
                age:22,
                marks:99
            }
        );
        await user1.save();
       await  user.insertMany(
            [
                {
                    name:"akshay",
                    age:19,
                    makrs:80
                },
                {
                    name:"priya",
                    age:20,
                    marks:99
                }
            
            ]
        )
    }
    catch(err){
        console.log("error detected",err);

    }
}
main();