const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const {Schema ,model }= require("mongoose");
require("dotenv").config();
const url = process.env.url;
async function  main(){
    try{
    await mongoose.connect(url+"family");
    const family_schema = new Schema(
{
     member_name:String ,
     age:Number,
     category:String 
});
const  family_member =  mongoose.model("family_member",family_schema);

console.log("collection created sucesffully");


const member1 = new family_member(
    {
        member_name : "rohit",
        age:20,
        category:"child"
    }
)
await member1.save();
await family_member.create(
    {
        member_name:"vaibhav",
        age:22,
        category:"adult"
    }
);
await family_member.create(
    {
        member_name:"sunil",
        age:50,
        category:"senior"

    }
);


 const child = await  family_member.find({
    
    name:"rohit",
    category:"child"
});
console.log(child);

 await family_member.updateOne(
    {
        name:"rohit"
    },
    {
   age:21
    }
);
await family_member.deleteMany({name:"Vaibhav"});









    }
    catch(err)
    {
        console.log(err);
    }

    
}

main();