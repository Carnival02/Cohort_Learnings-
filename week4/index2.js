
// Create ->  POST Request
// Read -> GET Request
// Update -> Put Request
// Delete -> DELETE Request


const express=require("express")

//starting app 
const app=express()
 
// Route handler
app.get('/',function(req,res){
    res.send('Hello world')
})
app.get('/asd',function(req,res){
    res.send('Hello world from ASD')
})

app.listen(3000) // Port Allocation

