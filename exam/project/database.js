const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const {MongoClient} = require("mongodb");
require("dotenv").config();
const url = process.env.url;;
const client = new MongoClient(url);
const dbname = "exam";
async  function main()
{
  try{
    await client.connect();
    console.log("db connected");
    const db = client.db(dbname);
    const users = db.collection("class");
    await users.insertOne(
        {
            name:"rohit",
            subject:"maths"
        }
    )

    



  }
  catch{

  }

}
main();