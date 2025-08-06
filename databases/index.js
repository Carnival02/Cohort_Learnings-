const express = require("express");
const { UserModel, TodoModel } = require("./db.js"); // importing the db.js so that can create it 
// const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET="ghagjdhuj6466"
mongoose.connect("mongodb+srv://carnival:7532040743H%40r@cluster0.p5ihj9o.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({ // this is inserting in db-> server in india kolkata 
        email: email,
        password: password,
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
        password: password,
    });

    if (response) {
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