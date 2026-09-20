const express = require("express");
const app = express();
const user = require("./modules/user");
const main = require("./db_connection");
const {user_auth} = require("./utilis/user_auth");
const {user_update_auth} = require("./utilis/user_auth")
app.use(express.json());

app.get("/user",async(req,res)=>
{
    const data = await user.find();
    res.send(data);
})
app.get("/user/:name",async(req,res)=>
{
    const person = await user.find(
        {
            name:req.params.name
        }
    );
    res.send(person);
})

app.post("/user",async (req,res)=>
{
    try{
    const data = req.body ;
    user_auth(data);
    await user.create(data);
    res.send("data saved");
    }
    catch(err)
{
    res.send(err.message);
}

})
app.patch("/user",async(req,res)=>
{

    try{
    user_update_auth(req.body);
    const data = req.body ;
    delete data.name;
     user_update_auth(data);
    user.updateOne(
        {
            "name":req.body.name
        },
        data
    )
    res.send("update sucessfully");
}
catch(err)
{
    res.send(err.message);
}

})
main().then(()=>
{

    
    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    });



})