const { Route} =require('express');
const { use } = require('react');

const userRoutes=Route();

userRoutes.post('/SignUp',function(req,res){
    res.json({
        message:"You are signed up"
    })
})

userRoutes.post('/SignIn',function(req,res){
    res.json({
        message:"You are signed up"
    })
})

userRoutes.post('/SignUp',function(req,res){
    res.json({
        message:"You are signed up"
    })
})
