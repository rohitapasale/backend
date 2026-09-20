const express = require("express");
const app = express();
const user = require("./modules/user");
const main = require("./db_connection");
const {user_auth} = require("./utilis/user_auth");
const {user_update_auth} = require("./utilis/user_auth")
const bcrypt = require("bcrypt");
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
    const salt = await  bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password,salt);

  await   user.create(req.body);





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
        const data = req.body;


        await user.updateOne({
            name:data.name

        },data
   )
res.send("updated");
    }
catch(err)
{
    res.send(err.message);
}

})
app.post("/user/login",async (req,res)=>
{
    const data = req.body ;
    const pass = data.password ;
    const store = await user.findOne({name:req.body.name});
    const key = store.password ;
    const result= await bcrypt.compare(pass,key);
    if(result)
    {
        res.send("login sucessfully");
    }
    else
        res.send("error");
})
main().then(()=>
{

    
    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    });



})