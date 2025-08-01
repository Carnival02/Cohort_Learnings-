
// Auth workflow --> signing in a website to checking is this user is exists or not 

 // Basic Backend App

const express=require("express")

const app=express();


app.use(express.json());


const users=[]; 

// should return a random logic in it
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        user.token=token
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
    const token=req.headers.token
    const user=users.find(user=>user.token===token);

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