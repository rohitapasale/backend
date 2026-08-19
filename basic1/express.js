const express = require("express");
const app = express();
app.use('/',(req,res)=>
{
    console.log("in home page");
    res.status(200).send("in home page");
})
app.listen(3000,()=>
{
    console.log("start listning");
})
// jb bhi server pr req aayegi to hmesha ye code execute hoga and use function ka route match ho gaya to wo sidha execute hoga and aage jayega hi nhi 