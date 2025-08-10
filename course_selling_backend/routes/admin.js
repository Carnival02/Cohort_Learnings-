const { Route }=require('express');

const adminRoute=Route();

adminRoute.post('/signUp',function(req,res){
    res.json({
        message:"You are signed Up"
    })
})

adminRoute.post('/signIn',function(req,res){
    res.json({
        message:"You are signed Up"
    })
})

adminRoute.post('/signUp',function(req,res){
    res.json({
        message:"You are signed Up"
    })
})

adminRoute.post('/courses',function(req,res){
    res.json({
        message:"You are coures"
    })
})

adminRoute.put('/courses',function(req,res){
    res.json({
        message:"You are edited the course"
    })
})

adminRoute.get('/courses/bulk',function(req,res){
    res.json({
        message:"You get all the courses"
    })
})