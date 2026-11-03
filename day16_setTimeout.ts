// setTimeout - It is a JS/TS function that allows us to delay the execution of a block of code for a specified amount of time

//synyax
//setTimeout(() => {}, timeout);

function first() : void{
    setTimeout(() => {
        console.log("Loading");
    }, 5000);
}
function second() : void{
    setTimeout(()=> {
        console.log("Loading Successful");        
    }, 2000);
}

first();
second();