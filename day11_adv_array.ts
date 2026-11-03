//map

//variable name.map((value,index,accumulator) => )

let arr : number[] = [10,20,30,40,50]

let result1 = arr.map((a,b,c) => a+5); // Assignment Operator
console.log(result);

let result11 = arr.map((a,b,c) => b+5);
console.log(result1);


// accumulator not used in map and filter - it is used only in reduce

// Filter
// variable name.filter((value, index, accumulator) => )
let f : number[] = [5,2,1,3,15,20,25,69,76,84,99]
let res1 = f.filter((x,y,z) => x<25)  // Relational Operator
console.log(res1);
let res2 = f.filter((x,y,z) => y<4)  // index // Relational Operator
console.log(res2);

//Reduce
//variable name.reduce((accumulator, current value) =>)
let r : number[] = [11,22,33,44,55]
let res3 = r.reduce((j,k) => j+k)
console.log(res3);