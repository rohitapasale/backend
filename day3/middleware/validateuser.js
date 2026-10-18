
async function validateuser(req,res,next)
{
  try{
    const newuser = req.body ;
    const mendatory = ["name","password","email"];
    const valid = mendatory.every((key)=>
    {
        return Object.keys(newuser).includes(key);
    });

    if(!valid)
       throw new Error("put correct data");
    next();

  }
  catch(err)
  {
    return res.send("error:"+err);
  }



}
module.exports = validateuser ;