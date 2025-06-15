
// EVERYTHING RELATED TO JS 

let naame="Harsh"
console.log(naame)

var isStudent=true;
console.log(isStudent);
isStudent="Harsh"
isStudent=10

console.log(isStudent);


const firstname="HArsh"
// firstname=1
console.log(firstname);

let user=["HAsrh","Gopal","AyushMann"]

console.log(user[1]);

for (let index = 0;index < user.length; index++)
    {console.log(`Hello ${user[index]}, Welcome to Coding workd`) ;
}
console.log(`Hello ${user[1]},Welcome to Coding world`);


function greet(name){
    return "Hello"+ name;
}

let ans=greet("Harsh")
console.log(ans);
let user=["HAsrh","Gopal","AyushMann"]

for(index=0;index<user.length;index++){
    console.log(greet(user[index]));
    
}
//Assigment 1 of class
function sum(num1,num2){
    return num1+num2
}

let anss=sum(5,9)
console.log(anss);
let ansss=sum("5","8")
console.log(ansss);

//Assignment 2 of class

function canVote(age){
    if(age>18) return "Yes You can vote"
    else return "No you can't"
}

let ram=canVote(28)
console.log(ram);
 
ages=[52,24,12,47,75]

for (i=0;i<ages.length;i++){
    if(ages[i]>18){
        return `Yes You can vote ${ages[i]}`;
    }else{
        return "No you can't "
    }
}

let user={
    name:"Harsh",
    age:17,
    school:"Ram LAl"
}
console.log("Harsh age is"+ user.age);

function greet(obb){
    console.log("Hello " +obb.name+ " Welcome Here and your age is"+obb.age);
    
}
let user1={
    name:"Ramlala",
    age:17,
    school:"Ram LAl"
}
// console.log(greet(user));
// console.log(greet(user1));
greet(user1)

let users={
    name:"Harsh",
    age:17,
    Gender:"Male",
    school:"Ram LAl"
};


function greets(obb){
   if(obb.Gender=="Male"){
    console.log("Mr "+obb.name+ "Welcom Here");
    
   }else{
    console.log("Mrs "+obb.name+ "Welcom Here");
    

   }    
}

greets(users)
//Array of Objects of Array 
let arr=["HArsh",21,{
    name:"Harsh",
    age:21,
    cities:["Delhi","Noidam","Gurugram",{
        countires:"India",
        city:"Noida"
    }]
}];

console.log(arr[2]);
const val1={
    name:"Harsh",
    age:21
}
console.log(val1);



function check(arr){
    // Right APPROACH
    let arr2=[];
    for(let i =0;i<arr.length;i++){
        if(arr[i].gender==="male" && arr[i].age>18){
            arr2.push(arr[i])
        }
    }

    return arr2;
}

const userss=[{
    name:"Harsh",
    age:21,
    gender:"male"
},{
    name:"Gopal",
    age:14,
    gender:"male"
},{
    name:"HAyush",
    age:22,
    gender:"male"
}]
const ans=check(userss)
//  check(userss)
console.log(ans);



