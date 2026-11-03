//Function - Names, Anonymous, Arrow

// Syntax
// function fun_name() : type {
// }


// named functio with void
function fun() : void{
    console.log("Function Topics");    
}
fun();

//function with parameter
function hi(text : string) : any {
    console.log(text);    
}
// hi();
hi("Welcome to Playwright");

// function with return type
function js(a:string) : any{
    return a;    
}
console.log(js("Hi Venkat"))

//Named func with rest parameter
function sum(a: number, b: number): number{
    return a+b;
    //  or let c = a+b;
    // return c;
}
console.log(sum(40,60));

//Named function with optional parameter
function opt(a : string, b : number, c? : string) : any {
    // return a + " " + b +" "+ c ;
    return a+b+c;
    // return a+b;
}
console.log(opt("Hello", 4000));
console.log(opt("Hello", 40, "Venkatesh"));


//Names function with default parameter
function defau(name : string, place : string, age : number=35) : any {
    return name + place + age;
}
console.log(defau("Venkat", "Chennai"));
console.log(defau("Arun", "Salem", 33));


//Anonymous function
let func_without_func_name = function (ab : string) : string {
    return ab;
}
console.log(func_without_func_name("Automation Testing"));

//Arrow function or lambda function or single line function
//Syntax () => {}

let arrow_fun = (arr : string) => {
    console.log(arr);    
}
arrow_fun("Arrow Function");