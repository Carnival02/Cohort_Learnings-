//Async Programming in Js

const { log } = require("console");
const { get } = require("http");

console.log("One");
console.log("Two")
console.log("Three")


setTimeout(()=>{
    console.log("HArsh VArdhan");
    
},5000)

console.log("Five");

//callback => Argument to another function is called callback --> aisa fxn jo dusre fxn ko argument me use hoga



const hello=()=>{
    console.log("Hello");
    
}

setTimeout(hello,4000)


// NESTING of callback is called callback HELL



function getData(dataId,getNextData){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data",dataId);
        resolve("success")
        if(getNextData){
            getNextData();
            
        }
         
    }, 2000);
   })
     
     
}
let prom=getData();
prom.then((res)=>{
    console.log("Promise fullfiled");
    
})
// Callback HELL ( eek ke andar 2nd ke andar 3rd (NESTED CALLBACK))
// Pyramid of DOOM 
getData(1,()=>{
    console.log("Geeting data 2 : ");
    
    getData(2,()=>{
        console.log("Getting data 3 :");
        
    getData(3,()=>{
        getData(4)
    })
})
})

// PROMISES in JS ==> for eventual complition of task
 
let promise=new Promise((resolve,reject)=>{
    console.log("I am a Promise ");
    resolve("Success");

    
})

// ASYNC AWAIt

async function hello(){
    console.log("HEllo");
    
}

// HERE fxn hello is promise
await hello()
await hello() // here 1st call execute 1st and then the 2nd one is execute only after 1st 