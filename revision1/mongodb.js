const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const {model} = require("mongoose");
const {Schema} = require("mongoose");

require("dotenv").config();
const url = process.env.url ;
async function main()
{
    try{
    await mongoose.connect(url+"revision");
    console.log("db connected sucessfully");
    const rev_schema = new Schema({
        name:String,
        chapters:Number,
        exam_data:Number,
        marks:Number
    })

    const revision = mongoose.model("rev",rev_schema);
   await revision.create(
        {
            name:"os",
            chapters:3,
            exam_date:19,
            marks:100
        }
    );
   await  revision.create(
        {
            name:"dbms",
            chapters:3,
            exam_date:22,
            marks:100
        }
    )
  await   revision.create(
        {
            name:"dsa",
            chapters:4,
            exam_date : 19,
        
        }
    )
}

catch(err)
{
    console.log(err);
}
    
}
main();
