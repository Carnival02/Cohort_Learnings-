

function sum(a,b){
    return a+b;
}

console.log(sum("4",5));


function sums(n){
    // let ans=0;
    // for(let i=0;i<=n;i++){
    //     ans+=i;
    // }
    let ans=n*(n+1);
    return ans;
}
console.log(sums(5));

//Reading File form other resourcess 
// const fs=require("fs")
// const cinte=fs.readFileSync("hekk.txt","utf-8")
// console.log(cinte);
// console.log(fs);

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiple(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function dos(a,b,op){
    return op(a,b)
}


let ans=dos(4,5,sum);
console.log(ans);

//ASynchronous code

// const fs=require("fs");

// function print(err,data){
//     console.log(data);
    
// }


// const content=fs.readFile("hekk.txt","utf-8",print)//asynchronous way 
// const content2=fs.readFile("hhj.txt","utf-8",print)
// console.log("Done");

function timeout(){
    console.log("Hello inside the fxn");
    
}
console.log("Hii")
setTimeout(timeout,1000);

console.log("after time out");

let c=0
for(let i=0;i<1000000000;i++){
    c=c+1;
}
console.log("Expensive Task done");



