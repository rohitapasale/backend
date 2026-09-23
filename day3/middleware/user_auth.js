const jwt = require("jsonwebtoken");
const user = require("../modules/user");
async function user_auth(req,res,next)
{
    
      const payload = jwt.verify(req.cookies.token,"pass@123");
        const username = payload.username ;
        req.username = username;
        const result = await user.findOne(
            {
                username:username
            }
        );
        if(!result)
        {
            return res.send("user not found");
        }
        req.result = result ;
        next();


}
module.exports = user_auth;