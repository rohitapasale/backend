const express = require("express");
const app = express();
app.use(express.json());
const main = require("./db_connection")
const user = require("./modules/user");
const db_auth = require("./utilis/db_auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate_user = require("./middleware/validate_user");


const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.post("/auth/signup",  db_auth,async (req,res)=>
{
    try{



const pass = req.body.password;
const hashpass = await bcrypt.hash(pass,8);
req.body.password = hashpass ;

await user.create(req.body);
res.send("data saved");






    }
    catch(err)
    {
        res.send(err.message)
    }

})
app.post("/auth/login",async (req,res)=>
{
    try{
        const user1 = req.body;
        const exist = await user.findOne(
            {
                username:user1.username
            }
        );
        if(!exist)
        {
            throw new Error("err:",err.message);
        }
        const validate = bcrypt.compare(user1.password,exist.password);
        if(!validate)
        {
            throw new Error("password or username not match");
            return;
        }

        const token = jwt.sign({
            username:exist.username
        },"pass@123");
        res.cookie("token",token);
        res.send("login sucessfully");




    }
    catch(err)
    {
        res.send(err.message);

    }
    
})
app.post("/auth/logout",(req,res)=>
{
    res.send("log out suceesfully");
})


app.get("/user", validate_user,async (req,res)=>
{
    try
    {
        res.send(req.result);
        
    }
    catch(err)
    {
        res.send(err.message);
    }
    
})
app.patch("/user",validate_user,async (req,res)=>
{
    const {submission,year}= req.body;

      if (submission !== undefined) {
            req.result.submission = submission;
        }

        if (year !== undefined) {
           req.result.year = year;
        }
    await user.updateOne(
        {
            username:req.result.username
        },
        req.result
    );
    res.send("done");
})

app.delete("/user",validate_user,async(req,res)=>
{
    await user.deleteOne(
        req.result
    )
    res.send("done delete")
})


main().then(()=>
{
    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    })
})