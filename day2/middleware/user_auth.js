const jwt = require("jsonwebtoken");
const student = require("../modules/student");

async function user_auth(req,res)
{

    try{
        const token = req.cookies.token;
        

    const valid = jwt.verify(token,"pass@123");
    const name =  valid.name;
    const result = await student.findOne({
        name:name
    });
    if(!result)
        return res.send("user not exist");
    req.result = result ;

    

    }
    catch(err)
    {
        res.send("error:"+err.message);
    }



}
module.exports = user_auth ;