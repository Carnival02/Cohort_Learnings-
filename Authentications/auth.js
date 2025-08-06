
const express=require('express')
const jwt=require('jsonwebtoken');

const JWT_SECRET='harshloveanvi123'
const app=express();

app.use(express.json());


const users=[]



// app.use(authMiddleware);


app.post('/signup',function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"You are signed in"
    })

})

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const founduser=users.find(function(u){
        if(u.username==username && u.password==password){
            return true
        }else{
           return false;
        }
        

    })

    if(!founduser){
        res.json({
            message:"Credientials are incorrect"
        })
        return 

    }else{
        const token=jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token:token
        })

    }
    


})

// Auth middleware
function authMiddleware(req,res,next){ 

    const token=req.headers.token
    const decodedData=jwt.verify(token,JWT_SECRET)
    if(decodedData.username){
        req.username=decodedData.username
        next();
    }else(
        res.json({
            message:"You are not logged in "
        })
    )


}

app.get('/me',authMiddleware,function(req,res){

    const token=req.headers.token;
    
    // const decodedData=jwt.verify(token,JWT_SECRET);// -> Verify the token 
    const username=req.username

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

app.listen(3000) 