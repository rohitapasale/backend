// dekho hme mongose he use krna hai tb bs basic mongo db se  operation krte hai
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const {MongoClient}= require("mongodb");
require("dotenv").config();

const url = process.env.url ;
const client = new MongoClient(url);
const dbname = "backend" ;

async function main() {
    try{
        await client.connect();
        console.log("db connect");
        const db = client.db(dbname);
        const collection = db.collection("user");
        console.log("done");
        const users = await collection.find().toArray();
        console.log(users)
        

    }
    catch{
   console.log("fails! ");
    }

    
}
main();
// sufficinet we never use mongodb we will use mongoose

