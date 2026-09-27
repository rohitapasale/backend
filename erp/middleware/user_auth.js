
const jwt = require("jsonwebtoken");
const student = require("../modules/student");
const redisClient = require("../../config/redis");
async function user_auth(req,res,next)
{
    try{
    const {token} = req.cookies;
    const payload =jwt.verify(token,"pass@123");

    const exist = await redisClient.exists(`token:${token}`);
    if(exist)
        throw new Error("user loged out")
    const result = await student.find({name:payload.name});
    if(!result)
    throw new Error("student not exist");

    req.result = result;
        next();
    }

    catch(err)
    {
        res.send("error:"+err.message);
    }

}
module.exports = user_auth ;