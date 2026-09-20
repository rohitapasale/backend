


 function user_auth(data)
{
const fields = Object.keys(data);
 const mandetory = ["name","age"];
 const validate = mandetory.every((key)=> fields.includes(key));
 if(!validate)
 {
    throw new Error("put all mendatory list");
 }



}


function user_update_auth(data)
{
   for(key in data )
   {
      if(key=="name")
      
      if(key=="age")
      {
         if(data[key]>100||data[key]<0)
            throw  new Error("invalid age");
      }
      if(key=="gender")
      {
         if(data[key]!="male"&&data[key]!=="female"&&data[key]!="other")
            throw new Error("invalid gender");
      }
   }
}
module.exports = {user_auth,user_update_auth} ;