const express = require("express");
const app = express();

app.use(express.json());
app.use('/',(req,res,next)=>
{
    // this is where we do autontication 
    const auth = true ;
    if(!auth)
        res.send("auth failse")
    console.log("auth sucessfull");
    next();
    // this will act as middleware as it doesn't give response pass this work to other function so we call it at middle-ware 
})
app.get('/student',(req,res)=>
{
    res.send("solve after middleware ");

})
app.post('/student',(req,res)=>
{
    const obj = req.body ;
    console.log(obj);
    res.send("done posting")
})
app.listen(3000,(req,res)=>
{
    console.log("listening at 3000 port");
})
