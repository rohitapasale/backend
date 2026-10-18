const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(['8.8.8.8','1.1.1.1']);
require("dotenv").config();
const url = process.env.url;
async function main() {
    if (!url) {
        throw new Error("MongoDB URL is missing in .env file");
    }

    await mongoose.connect(url);
    console.log("DB connected successfully");
}

module.exports = main;