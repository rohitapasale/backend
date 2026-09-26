
const jwt = require("jsonwebtoken");
const user = require("../modules/user");
const redisClient = require("../../config/redis");
async function validate_user(req,res,next)
{
try{
    const token  = req.cookies.token ;
    if(!token)
    {
        throw new Error("token not exist");
        return ;
    }
    const payload = jwt.verify(token,"pass@123");
    //req.username = payload.username;
    const exist =  await redisClient.exists(`token:${token}`);
    if(exist)
    {
        throw new Error("device log out ");
    }
    const result = await user.findOne(
        {
            username:payload.username
        }
    )
    if(!result)
    {
        throw new Error("user not exist");
        return
    }
    req.result = result ;
    next();
}

    catch(err){

        res.send(err.message);

    }


}
module.exports = validate_user ;