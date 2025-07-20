
// getting query params by using 
// app.get('/',function(req,res){
//     const num=req.query.n;
// })

const express=require("express");


const app=express();

//Ticket Checker
// function isOldAge(age){
//     if(age>=14){
//         return true;
//     }else{
//         return false;
//     }
// }


//app.use(isOldAgeMiddleWare) --> if this middleware use in every route

function isOldAgeMiddleWare(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"You are not Enough",
        })
    }
}





app.get('/ride',isOldAgeMiddleWare,function(req,res){
    // isOldAgeMiddleWare();
    res.json({
        msg:"You have successfully riden the ride 1"
    })
    
    

   
})

app.get('/ride2',isOldAgeMiddleWare,function(req,res){
   
    res.json({
        msg:"You have successfully riden the ride 2"
    })
    

   
})

app.listen(3000);