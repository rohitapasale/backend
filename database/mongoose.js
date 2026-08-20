// connection to db 
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.url;
async function main()
{
    await mongoose.connect(url);
}
main().then(()=>console.log("db connected")).catch(()=>console.log("failed")
)