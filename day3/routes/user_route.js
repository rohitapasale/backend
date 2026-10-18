const express = require("express");
const user_route = express.Router();
const user = require("../modules/user");
const user_auth = require("../middleware/user_auth");

user_route.get('/data',user_auth,async (req,res)=>
{
    res.send(req.result);

})

user_route.delete('/delete',user_auth,async(req,res)=>
{
    try{
    const user1 = req.result;
    await user.deleteOne(user1);
    res.send("done user deleted");
    }
    catch(err)
    {
        res.send("error:"+err);
    }
})
user_route.patch("/update",user_auth,async(req,res)=>
{
    
    await user.findOneAndUpdate({email:req.body.email},req.body);
    res.send("saved sucessfully");
})


module.exports = user_route;