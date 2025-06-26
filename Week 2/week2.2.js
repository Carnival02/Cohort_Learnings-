 // Async and Callbacks / Promises 


  // classes in JS

//   class Rectangle{
//     constructor(wd,hi,color){
//         this.wd=wd;
//         this.hi=hi;
//         this.color=color;
//     }
//     area(){
//         const area=this.wd*this.hi;
//         return area;
//     }

//     paint(){
//         console.log(`paint this rect with ${this.color}`);
        
//     }


//   }

//   const React=new Rectangle(4,5,"Green")
//   const ares=React.area()
//   console.log(ares);
//   React.paint()

 class User{
    //creating constructors 
    constructor(Name,Age,life_left){
        this.Name=Name;
        this.Age=Age;
        this.life_left=life_left;
    }
    // Creating function inside class 

    name(){
        console.log(`Hi my name is ${this.Name}`);
        
    }
    age(){
        console.log(`My age is ${this.Age}`);
        
    }
 }

 const Rampur=new User("Harsh",21,48);
 const Rampur2=new User("Harish",45,48);


 Rampur.name()
 Rampur.age()
 Rampur2.name()

 //------------------------------------
//Date class
const now=new Date();
//------------------------------
// Maps in Js
const mp=new Map();
mp.set('NAme','Alice')
mp.set('age',21);

console.log(mp.get('NAme'));

//====================================================

// PROMISE CLASS --> I'll return you someting in future only simialr to call back 

function logName(){
    console.log("HArhs");
    
}
setTimeout(logName,3000)// call back the logName function
// callbacks based approach
// promise based approach-> clear way to using asyn


function w3s(resolve){
    // console.log(resolve);
    
    setTimeout(resolve,3000);
}

function main(){
    console.log("main is called ");
    
}

// w3s(main)
 
//---- CREATING MY OWN PROMISE FUNCTION----------------------

// function setTimeoutPromisified(){
//     return new Promise(w3s)
// }

// setTimeoutPromisified().then(main);


// function random(resolve){ // resolve is a function as well
//     setTimeout(resolve,3000)
// }


// let p=new Promise(random)// suppose to return u something eventually 

// console.log(p);



// //using the eventual value returned by the promise
// function callback(){
//     console.log("Promise is succeded");
    
// }
// p.then(callback)


// Creating a promise
// function sendFile(resolve){
//     const fs=require('fs')
//     fs.readFile("hhj.txt","UTF-8",function(err,data){
//         resolve(data);

//     })
// }

// function readFiles(filename){
//     return new Promise(sendFile)
// }

// const p=readFiles();
// function callback(contents){
//     console.log(contents);
    
// }

// p.then(callback)



//------- New promise------

function aftersetTimeout(resolve){
    // function name(){
    //     console.log("Promise is succeesss");
        

    // }
    setTimeout(resolve,3000);
    // resolve();
    
}

function promsiseway(input){
    return new Promise(aftersetTimeout);
}

const ps=promsiseway();

function call(){
    console.log("Success");
    
}

ps.then(call)
