// Callback function is simply a funciton that we pass as an argument to another function

// Function we pass the callback to, will callback it after it has finished its task

function morning(){
    setTimeout(() => {
       console.log("Good Morning");        
    }, 5000);
}
function evening(){
    setTimeout(() => {
       console.log("Good Evening");        
    }, 3000);
}

// morning();
// evening();

// Callback - using callback the output will be synchronized and executed in the proper order

function morning1(callback : () => void){
    setTimeout(() => {
       console.log("Good Morning"); 
       callback()       
    }, 5000);
}
function evening1(callback : () => void){
    setTimeout(() => {
       console.log("Good Evening");
       callback()        
    }, 3000);
}

morning1(() => {
    evening1(() => {})
})