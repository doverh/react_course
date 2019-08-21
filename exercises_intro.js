//Const variables dont change
const constantName = "Using const SomeName";
console.log(constantName);

//This will generate an error because you can't reassign a value to a constant 
//constantName = "will not change";
//console.log(constantName);

//Var
var name = "MyName";
console.log("Using var first occurence: "+ name);
name =  name + "_change";
console.log("Using var second occurence: "+ name);

//Let - The let statement declares a block scope local variable
let myName = "MyName";
console.log("Using let first occurence: "+ myName);
myName =  myName + "_change";
console.log("Using let second occurence: "+ myName);

//Normal Function X Arrow Function
function printName(name){
    console.log(name)
}
console.log("This is normal function");
printName("Dover");

console.log("This is arrow function");
const printMyName = (name) =>{
    console.log(name);
}
printMyName("John");

//Concise function
const multiply = (number,multiplier) => number * multiplier;

console.log(multiply(2,8));
