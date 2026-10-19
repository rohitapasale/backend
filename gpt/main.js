const express = require("express");
const app = express();
const main = require("./genai");
app.use(express.json());

app.post('/chat/:id',async(req,res)=>
{
    main(req,res);
})

app.listen(3000,()=>
{
    console.log("listenig at 3000");

})