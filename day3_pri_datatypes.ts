// Primititve Data type
// Primitive datatype - store single value in the variable


// javascript
let age = 30;
console.log(typeof(age));

age = "thirty"; //Allowed in JS but allowed in TS
console.log(typeof(age));

//Typescript
//type safety protects the meaning of the variable so we do not change the type

let message = "hi everyone"
console.log(message);
let year = 2025;
message = "2026";
console.log(typeof(message));
message = "Hello Everyone"
console.log(message);
console.log(year);


// Data type terminologies
// Annotations
let age1 : number = 42;
console.log(typeof(age1));
// Type inference
let age2 = 45;
console.log(typeof(age2));

//Primitive Data Types
// number, string, boolean, null & undefined, any, uniton type

//number
let age3 : number= 40;
let percentage = 99.87;
let weather = -5;

//string
// alphabets and number used inside "single, double and backtick symbol"
// ${} = Template literal

let firstname : string = "Venkatesh";
let middlename : string = "N";
let lastname : string = "Nandakumar";

let name1 : string = `${firstname} ${middlename} ${lastname}`
console.log(name1);

//boolean (true/false, 1 = true / 0 = false)
let isStudent : boolean = true;
let hasJob  : boolean = false;

// null & undefined
// value of null is null itself
// any value is not assigned to a variable, it is undefined

// The time when we declaring a variable we never use these below two types

let emptyVlaue : null = null;
let notAssigned : undefined = undefined;

// any
// used to assign any data type to a variable
// type safety was ignored
// loses the benefit of typescript, so use cautious

let value : any = "Hundred"
console.log(value);
console.log(typeof(value));
value = 100;
console.log(value);
console.log(typeof(value));

//union type
//  union is not a keyword of a data type like number, boolean, any
//  union is assigning more than one data type to a variable
// Each keyword will be mentioned after '|' this vertical bar symbol
//  use union type instead of any

let id : number | string | null;
id = 12345;
console.log(typeof(id));
id = "abc123";
console.log(typeof(id));
id = null;
console.log(typeof(id));

// void
// it is used for function not for variable
// it is used in the function that doesn't return anything
// it is optional to use

// type 1 with void
function sum(a : number, b : number) : void{
    console.log(a+b);    
}
sum(1000,2000)

// type 2 without void
function add(a : number, b : number){
    return (a+b);    
}
// let result = add(10000,35000);
// console.log(result);
console.log(add(45,52));