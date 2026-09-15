const express = require("express");
const app = express();

app.use(express.json());
const language = [];
app.post("/user",(req,res)=>
{
    try{
    const  lang = req.body.lang;
    language.push(lang);
    res.send("done");
    }
    catch(err)
    {
        res.send(err.message);
    }


})

app.get("/user",(req,res)=>
{
    try{
    res.send(`this language user know ${language}`);
    }
    catch(err)
    {
        res.send(err.message);
    }
})


app.use("/",(req,res)=>
{
    res.send("at home page");
})

app.listen(3000,()=>
{
    console.log("listening at 3000");
})