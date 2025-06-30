// All about Async Await

// const { rejects } = require("assert");
// const { resolve } = require("path");


// function setTimeoutPromiseified(duration){
//     return new Promise (function (resolve){
//         setTimeout(resolve,duration);
//     });
// }

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


// async function solve() {
//     await setTimeoutPromiseified(1000);
//     console.log("hi");
//     await setTimeoutPromiseified(3000);
//     console.log("HEllo");
//     await setTimeoutPromiseified(5000);
//     console.log("Hello thetre ")   
// }

// solve()

// console.log("after solve function");
 
// fs=require("fs")

// function readFileAsync(){
//     return new Promise(function(resolve,reject){
//         fs.readFile("heknnk.txt","utf-8",function(err,data){
//             if(err){
//                 console.log("File not found");
                
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// readFileAsync()
//     .then(function(x){
//         console.log("file is read "+x)
        
//     }).catch(function(e){
//         console.log(e);
        
//     })
  
    //-------------------------------------------------------------

    // Async Await Revision ( chorot 2.0 )

    //( Asunc Calls )
    
    
    // function onDone(){
    //     console.log("Hello");
        
    // }

    // setTimeout(onDone,1000);
    // console.log("after setTimeout");
    

    // fs=require("fs")

    // function filewriting(resolve){
    //     fs.readFile("a.txt","utf-8",function(err,data){
    //         data=data+"Here file is written by promise"
            
    //         fs.writeFile("a.txt",function(){
    //             resolve();
    //         });
    //     });
    //     setTimeout(resolve,3000)
    // }

    // function fileding(){
    //     return new Promise(filewriting);

    // }

    // let p= new fileding();

    // function callss(){
    //     console.log("File is written succesfully ");
        
    // }

    // p.then(callss)


    //----------------------------------------------
    //Promisifying async function 


    // does not return anthing -> undefiend 
    function myownSettimeout(callback,duration){
        setTimeout(callback,duration);
        return 0
    }

    // returning promise 
    function promisifyedmyownSetimeout(duration){
        let p=new Promise(function(resolve){
               setTimeout(resolve,duration);
            //    setTimeout(function(){
            //     resolve();
            //    },duration)             
        });
        return p;
    }

    const ans=promisifyedmyownSetimeout(1000);
    ans.then()

    // async await syntax , Promise chaining => Callback hell se chutkara
    console.log(ans);
    ans.then(function(){
        console.log("timeout is done ");
        
    })
    
    myownSettimeout(function(){
        console.log("After somethings");
        
    },1000) 

    // Callbacks ==> callback hells
    // promises ==> Promise chaining,Async await syntax 

    function someSynctask(){
        console.log("Some sync task 1");
        
        
    }

    function someSynctask2(){
        console.log("Some sync task 2");
        
        
    }
    setTimeout(function(data){
        someSynctask2(data)
    },1000)

    someSynctask()  