//promise

//return new Promise((resolve, reject) = > {})

function go (): Promise<string>{
    return new Promise((resolve, reject) => {
       setTimeout(() => {        
            resolve("I am going to the shop")        
       }, 5000);
    })
}

function buy () : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve("I am Buying the product")            
        }, 2000);
    })
}

function change (): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve("Collected the changes")            
        }, 1000);
    })
}

function back () : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve("I am back to home") 
        }, 5000);
    })
}

go()
.then(val => {console.log(val); return buy()})
.then(val => {console.log(val); return change()})
.then(val => {console.log(val); return back()})
.then(val => {console.log(val); })

export {};