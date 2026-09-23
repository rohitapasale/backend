
const express = require("express");
const user_route = express.Router();
const db_auth = require("../utilis/db_auth");
const user_auth = require("../middleware/user_auth")
const user = require("../modules/user");
user_route.get("/user", user_auth,async (req,res)=>
{
    try{
  
    res.send(req.result);
}
catch(err)
{
    res.send(err.message);
}
})

user_route.patch("/user",user_auth,db_auth,async (req,res)=>
{
  
    
    await user.updateOne(
        {
            username:req.username
        },
        {
          "gender":req.body.gender,
          "age":req.body.age
        }
    )
res.send("sucessfully saved");

});
user_route.delete("/user",user_auth,async(req,res)=>
{
    const username = req.body.username ;
    await user.deleteOne(
        {
            "username":username
        }
    );
    res.send("done");
})
module.exports = user_route;