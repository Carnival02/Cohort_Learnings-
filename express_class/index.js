
const express= require("express");

const app=express();


 var users=[{
    names:"Harshj",
    kidneies:[{
        health:false
    }]

 }];

 app.use(express.json());


app.get("/",function(req,res){
    //write logic
    const Harshjkidnes=users[0].kidneies;
    console.log(Harshjkidnes);
    const noberofKidnes=Harshjkidnes.length;
  let numberOfHealthyKidney=0;
  for(let i=0;i<Harshjkidnes;i++){
    if(Harshjkidnes[i].health){
        numberOfHealthyKidney=numberOfHealthyKidney+1;
    }
  }
  const numberOfUnHealthyKidney=noberofKidnes - numberOfHealthyKidney;
  res.json({
    Harshjkidnes,
    noberofKidnes,
    numberOfUnHealthyKidney
  })  
})

app.post("/",function(req,res){

    const isHealthy=req.body.isHealthy;
    users[0].kidneies.push({
        health:isHealthy
    })
    res.json({
        msg:"DONE !"
    })
})

app.put("/",function(req,res){
    for (let i=0;i<users[0].kidneies.length;i++){
        users[0].kidneies[i].health=true;
    }
    res.json({})
})

app.delete("/",function(req,res){
    
})

app.listen(3000);

