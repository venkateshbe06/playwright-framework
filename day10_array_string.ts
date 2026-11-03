//push - add element at the end of the array

let data : number [] = [10,20,30,40,50]
data.push(60)
console.log("push add element at last", data);

// let pop1 : num[] = [10,20,30,40,50]
data.pop()
console.log("removes last element from the last", data);

data.shift()
console.log("removes last element from the beginning", data);

data.unshift(1000);
console.log("insert element at the beginning", data);

//splice
//variable name.splice(index, splice_number, value)
//splice_number = 0 (adds the new element value at the given index)
//splice_number = 1 (replace the new element value  at the given index)
// variable  name.splice(3,1) (removes the element at the given index)

let str : string[] = ["Sunday", "Monday", "Tuesday", "Thursday"]

str.splice(3,0,"Wednesday")
console.log(str);

str.splice(1,1, "Friday") //replace  monday as friday
console.log(str);

str.splice(2,1)
console.log(str); // removes tuesday since it's index is 2

//sort 
let abc : string[] = ["b", "e", "f", "a", "d", "c"]
console.log(abc.sort());
console.log("Org array", abc); // sorts in place in the original array

let names : string[] = ["balu", "fathima", "arun", "david", "cat"]
console.log(names.toSorted());
console.log("Org array", names); // creates a new array 

let values : number[] = [30,10,20,60,40,50]
console.log("Descending order", values.sort((a, b) => b - a))

console.log("Ascending order", values.sort((a, b) => a - b))


//Reverse

let str1 : string = "olleh";
console.log("Reversed String", str1.split("").reverse().join(""));

// init uppercase
let text : string = "hello venkatesh welcome"

let result = text
            .split(" ")
            .map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
            .join(" ")
            
console.log(result);

export {};