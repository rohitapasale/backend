
async function db_auth(req,res,next)
{
    const obj = req.body;
    for(key of Object.keys(req.body) )
    {

        if(key=="age")
        {
            if(obj[key]<10||obj[key]>70)
            {
                throw new Error("invalid age");
            }
        }
        if(key=="gender")
        {
            if(obj[key]!="male"&&obj[key]!="female"&&obj[key]!="other")
                throw new Error("invalid gender");
        }
        if(key=="bio")
        {
            if(obj[key].length>=30)
                throw new Error("change the bio");
        }

    }
    next();
}
module.exports = db_auth ;