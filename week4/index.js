

const express = require("express")

const app =express();

app.get('/sum/:a/:b',function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    //--> if you pass everything in route handler to manage query use params and  write things like /sum/:a/:b and use req.params.a to access a in browser by using localhost:3000/sum/20/10


    res.json({
        answer:a+b
    })
   
})

app.get("/sub",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt( req.query.b);

    res.json({
        answer:a-b
    })
})
app.get("/multiple",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer:a*b
    })
})

app.get("/div:/a:/b",function(req,res){
    const a =parseInt(req.params.a)
    const b= parseInt(req.params.b)

    res.json({
        answer:a/b
    })
    
})



app.listen(3000)
