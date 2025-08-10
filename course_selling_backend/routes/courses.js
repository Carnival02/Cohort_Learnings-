const { Route }=require('express');

const couresRoute=Route();


couresRoute.post('/',function(req,res){
    res.json({
        message:"these are course"
    })
})

couresRoute.put('/',function(req,res){
    res.json({
        message:"You can now edit the course"
    })
})

couresRoute.get('/allcourse',function(req,res){
    res.json({
        message:"Your all courses "
    })
})