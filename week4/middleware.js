


const express = require("express")

const app =express();
//Calculator HTTP server


//HOW to add middlewares examples given below

// it may or may not change the request object
/*
it will

app.use(express.json())----> parse the body into JSON 

i.e 
let middleware=express.json()
app.use(middleware )--->> for sending JSON data in body in POST request 

also can use bodyParser.json()--> do same thing 

*/ 

let requestCount=0;

function middlecount(req,res,next){
    requestCount=requestCount+1;
    next();
}


app.get('/sum/:a/:b',middlecount,function(req,res){
    // middlecount(req,res)--> also call like this and also like the above one ;
    console.log(`total number of SUM request ${requestCount}`);
    
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    //--> if you pass everything in route handler to manage query use params and  write things like /sum/:a/:b and use req.params.a to access a in browser by using localhost:3000/sum/20/10


    res.json({
        answer:a+b
    })
   
})

// app.use(middleCount) ---> global Middlewares 
app.get('/sub/:a/:b',middlecount,function(req,res){
    
    console.log(`Total no of sub req${requestCount}`);
    
    const a =parseInt(req.params.a);
    const b= parseInt(req.params.b);

    res.json({
        answer:a-b
    })
})



app.listen(3000)

