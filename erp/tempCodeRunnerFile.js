app.get("/student_info" ,user_auth,async(req,res)=>
{
res.send(req.result);
})
