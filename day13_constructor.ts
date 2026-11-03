//Constructor
// A contructor is like the setup process that runs when we create an object from a class
// It helps us setup the initial properties of the project - giving the starting information

class Student{
    name : string;
    age : number;
    place : string

    constructor(studentname : string,
                studentage : number,
                studentplace : string){
                    this.name = studentname;
                    this.age = studentage;
                    this.place = studentplace;
    }
    stdDetails(){
        console.log("Name of the Student: ", this.name);
        console.log("Age of the Student: ", this.age);
        console.log("Place of the Student: ", this.place);        
    }
}
const stdref = new Student("Harish", 36, "Chennai");
stdref.stdDetails();