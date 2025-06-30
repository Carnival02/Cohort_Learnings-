// All about Async Await

const { resolve } = require("path");


function setTimeoutPromiseified(duration){
    return new Promise (function (resolve){
        setTimeout(resolve,duration);
    });
}

// function callbacks(){
//     console.log("Hello agter 5 ");
    
// }
// function callback(){
//     console.log("hello ");
    
// }
// function call(){
//     console.log("Hiiee  ");
    
// }
// setTimeoutPromiseified(5000).then(callbacks)
// setTimeoutPromiseified(1000).then(call)
// setTimeoutPromiseified(3000).then(callback)


async function solve() {
    await setTimeoutPromiseified(1000);
    console.log("hi");
    await setTimeoutPromiseified(3000);
    console.log("HEllo");
    await setTimeoutPromiseified(5000);
    console.log("Hello thetre ")   
}

solve()

console.log("after solve function");
 
fs=require("fs")

function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("heknnk.txt","utf-8",function(err,data){
            if(err){
                console.log("File not found");
                
            }else{
                resolve(data);
            }
        })
    })
}

readFileAsync()
    .then(function(x){
        console.log("file is read "+x)
        
    }).catch(function(e){
        console.log(e);
        
    })

    //-------------------------------------------------------------

    // Async Await Revision ( chorot 2.0 )

    