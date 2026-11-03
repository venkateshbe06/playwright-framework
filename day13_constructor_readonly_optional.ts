//Constructor
// A contructor is like the setup process that runs when we create an object from a class
// It helps us setup the initial properties of the project - giving the starting information

class Employee{
    readonly name : string;
    age : number;
    place : string

    constructor(empname : string,
        empage : number,
        empplace : string){
        this.name = empname;
        this.age = empage;
        this.place = empplace;
    }
    empDetails(){
        console.log(`Name of emp is ${this.name}\n
        Age of emp is ${this.age}\n
        Place of emp is ${this.place}`);
               
    }
}
// const empref = new Employee("Harish", "Chennai");
const empref = new Employee("Harish", 26, "Chennai");
// empref.name = "Deepak";  //cannot assign to name because it is a read-only property
empref.empDetails();