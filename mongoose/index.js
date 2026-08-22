const express = require("express");
const app = express();
const main = require("./connect");
const hospital = require("./hospital");

main().then( async ()=>
{
 app.use(express.json());
    app.post('/admit',async (req,res)=>
    {
        try{
       await  hospital.create(req.body);
        res.send("done sucessfully");
        }
        catch(err)
        {
            console.log(err);
            res.send(err.message);
        }
        
    })
    app.get("/admit", async(req,res)=>
    {
        try{
        const result = await hospital.find();
        res.send(result)}
        catch(err)
        {
            res.send(err.message);
        }
    })
    app.get("/admit/:id",async (req,res)=>
    {
        const id= req.params.id ;
        //const id = parseInt(id1);
        const result = await hospital.findById(id);
        res.send(result);
    })

  app.patch("/admit/:id",async (req,res)=>
{
    try{
        const id = req.params.id ;
        await hospital.findByIdAndUpdate(id,{
            name:"rohit pasale",
            age:9
          
        },{
            runValidators:true
        })
          res.send("done")

    }
    catch(err)
    {
        res.send(err.message);
    }
})





    app.listen(3000,()=>
    {
        console.log("listening at 3000 port");
    })


})