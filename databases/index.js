const express = require("express");
const bcrypt=require('bcrypt');
const { UserModel, TodoModel } = require("./db.js"); // importing the db.js so that can create it 
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { z } =require("zod");
// const JWT_SECRET="ghagjdhuj6ghh466"
mongoose.connect("mongodb+srv://carnival:7532040743H%40r@cluster0.p5ihj9o.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

/// Validating the email and password 
    const requireBody=z.object({
        email:z.string().min(3).max(100),
        name:z.string(),
        password:z.string()
    })

    // const parsedData=requireBody.parse(req.body);
    const parsedData=requireBody.safeParse(req.body);//--> safe parse 

    if(!parsedData.success){
        res.json({
            message:"Inncorrect formaat"
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hasedPassword=await bcrypt.hash(password,5); //-> hashsiing the password
    console.log(hasedPassword);
    

    await UserModel.create({ // this is inserting in db-> server in india kolkata 
        email: email,
        password: hasedPassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
}); 


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        // password: password,
    });

    if(!response){
        res.status(403).json({
            message:"user does not exists in our db"
        })
    }

    const passwordMatch=await bcrypt.compare(password,response.password);


    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString() // sending token in objectId 
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});



app.post("/todo",  async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos",  async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);
