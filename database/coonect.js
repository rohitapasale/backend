const express = require("express");

const main = require("./curd");
const users = require("./exams");

const app = express();

main().then(() => {

    app.use(express.json());
    app.post("/regitser", async (req,res)=>
    {
        try{

            await users.create(req.body);

        }
        catch(err){
            console.log(err);

        }
    })
    app.listen(3000, () => {
        console.log("start listening");
    });

}).catch((err) => {
    console.log(err);
});