// Initialization - Value Assignment

var x; //Declaration
x=100; // initialization

var x; // can only be declared
let y; // can only be declared
const z=50; // must be initialized

console.log(x);
console.log(y);
console.log(z);

// Re-Declaration - redeclare variable
var country = "India";
var country = "US";

let state = "New Delbi";
// let state = "London"; //Not allowed

const continent = "Asia";
// const continent = "Pacific"; //Not allowed

console.log(country);
console.log(state);
console.log(continent);


//Scope - accessible area (functional scope, block scope)
function scope(){
    if(true){
        var msg1 = "this is stored in var";
        let msg2 = "this is stored in let";
        const msg3 = "this is stored in const";
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);        
    }
    console.log(msg1);
    // console.log(msg2);
    // console.log(msg3);
}
scope();

// Re-Initializaiton - value reassignment
var a = 100;
a = 200; // Allowed

let b = 300;
b = 400; // Allowed

const c = 500;
// c = 600; // Not Allowed

console.log(a);
console.log(b);
console.log(c);

// Hoisting
var a1 = 1000;
console.log(a1);
// var a1 = 1000;

let b1 = 2000;
console.log(b1);
// let b1 = 2000;

const c1 = 50;
console.log(c1);
// const c1 = 50;



