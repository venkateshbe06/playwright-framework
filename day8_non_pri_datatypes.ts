// Non-primitive datatype - store multiple values in the variable

// Mutable - Data can be changed after creation (ex: object, array)
// Immutable - data cannot be changed, 
//           - a new value/object must be created instead
// (ex : string, number, boolean)


// never - Function never completes normally
// object - Any non-primitive object
// Array<T>/T[] - Collection of values
// Tuple - Fixed length array with specific data types
// enum - Named const values
// interface - custom object structure
// type - custom data alias
// Promise<T> - Future value from asynchronous operations

//Array 
//Type 1 method
let new_array : string[] = ["hello", "Playwright", "Technology"];
console.log("type 1 method", new_array);
console.log(new_array[1]);

//Type 2 method
let array2 :  Array <string> = ["Monday", "Tuesday", "Wednesday"];
console.log("type 2 method",array2);
console.log("type 2 method",array2[1]);

let numbers : Array <number> = [20,30,10,5,3,7]
console.log(numbers);

//Tuple
let my_tuple : [string, number, string] = ["Venkatesh", 8987667, "Chennai"];
console.log(my_tuple);


//object - key value pair

//Type 1
let obj : any = {
    name : "Arun",
    age : 30,
    place : "salem"
};
console.log(obj);
console.log(obj.name);
console.log(obj.place);

//Type 2
type sample = {
    name : string;
    age : number;
    id : number
}

let ref : sample = {
    name : "Muthu",
    age : 32,
    id : 87877
}
console.log(ref);

export{ }