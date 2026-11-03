// for of - fetch element from array
let strs : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

for(let element of strs){
    console.log(element);
}


//for in get data from objects
let objs2 : any = {
    name : "Venkat",
    age : 35,
    id : 36763,
    place : "salem"
}

for(let data in objs2){
    console.log(data + " : " + objs2[data]);    
}