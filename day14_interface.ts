// interface in typescript is a way to define the structure of an object
// it defines what properties and methods an object should have, along with their types

// Regular properties
// optional properties
// Readonly properties & funtion types
// Extending interfaces - extends
// Class implements interface - implements

//Regular propterties
interface reg {
    name1 : string,
    place1 : string,
    pincode1 : number
}
const objt : reg ={
    name1 : "Venkat",
    place1 : "Chennai",
    pincode1 : 600005
}
console.log(objt);

//optional propterties
interface opt {
    name2 : string,
    place2 : string,
    pincode2 ?: number
}
const objt2 : opt ={
    name2 : "Venkat",
    place2 : "Chennai",
    // pincode2 : 600005
}
console.log(objt2);

//readonly propterties
interface read {
    readonly name3 : string,
    place3 : string
}
const objt3 : read ={
    name3 : "Venkat",
    place3 : "Chennai",
}
objt3.name3 = "Arun"; //but execute in javascript, highlight the error in typescript

console.log(objt3);