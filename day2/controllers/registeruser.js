const user = require("../modules/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
async function register_user(req,res)
{
    try{
    const user1 = await user.findOne(
        {
            $or:[
                {
                    name:req.body.name
                },
                {
                    email:req.body.email
                }
            ]
        }
    )
    // console.log("Ready state:", mongoose.connection.readyState);
    if(user1)
        throw new Error("user exist ");
 req.body.password = await bcrypt.hash(req.body.password,8);
    user.create(req.body);
    res.send("register sucessully");
}
catch(err)
{
    res.send("error:"+err);
}
    }
    module.exports =register_user;