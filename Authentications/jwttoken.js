
// Auth workflow --> signing in a website to checking is this user is exists or not 

 // Basic Backend App

const express=require("express")
const jwt=require('jsonwebtoken')
const JWT_SECRET="rankshidnsjodjsdiloveanvi"

const app=express();


app.use(express.json());


const users=[]; 


// should return a random logic in it
// No need more to use your own logic using JWT 


app.post('/signup',function(req,res){

    // Also can add Input Vlaidation
    const username=req.body.username;
    const password=req.body.password;

    // if(users.find(u=> useDebugValue.username=== username)){
    //     res.json({
    //         message:"You are already there "
    //     })
    // }

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"You are signed IN"
    })
    console.log(users);
    
})

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const user=users.find(function(u){
        if(u.username==username && u.password==password){
            return true;
        }else{
            return false;
        }
    })

    if(user){
        const token = jwt.sign({
       
            username:username
       
        }, JWT_SECRET) ///convert their username into JWT
        
     
        res.json({
            token:token
        })



    }else{
        res.status(403).send({
            message:"Wrong pass and Username"
        })
    }
    console.log(users);
    
})


app.get('/me',function(req,res){
    const token=req.headers.token // send JWT

    const decodedInfo=jwt.verify(token,JWT_SECRET); // give json objedct Usename and pass 

    const username=decodedInfo.username

    const user=users.find(user=>user.username===username);

    if(user){
        res.json({
            username:user.username,
            password:user.password,
            message:`Hey ${user.username} , Welcome to course`
        })
    }else{
        res.json({
            message:"Token invalid "
        })
    }
})









app.listen(3000);