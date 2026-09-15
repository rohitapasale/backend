const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.url ;

async function main()
{
    await mongoose.connect(url+"school")
    console.log("db connected")
}

module.exports = main ;