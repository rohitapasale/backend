
const bcrypt = require("bcrypt");

// sign up
var hash;
async function signup() 
{
    try{
    const pass ="rohit@123";
    const salt = await bcrypt.genSalt(6);
    hash = await  bcrypt.hash(pass,salt);
    } 
    catch(err)
    {
        console.log(err.message+"in signup");
    }



}
async function login() {
    try{
    const userpass = "rohit@123"
  const   check =await  bcrypt.compare(userpass,hash);
    if(check)
        console.log("log in sucessfully");
    else
        console.log("failed");
}
catch(err)
{
    console.log(err.message+" in login");
}
    
}
async function main() {
    await signup();  // wait until hash is created
    await login();   // then check password
}

 main()