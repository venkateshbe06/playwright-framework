//promise

//return new Promise((resolve, reject) = > {})

function go (): Promise<string>{
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        let a : boolean = true;
        if(a){
            resolve("I am going to the shop")
        }
        else{
            reject("I am not going to the shop")
        }
       }, 5000);
    })
}

function buy () : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b : boolean = true;
            if(b){
                resolve("I am Buying the product")
            }
            else{
                reject(" I am not Buying the product")
            }
        }, 2000);
    })
}

function change (): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let c : boolean = false;
            if(c){
                resolve("collected the changes")
            }
            else{
                reject("Forgot to collect the changes")
            }
        }, 1000);
    })
}

function back () : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let d : boolean = true;
            if(d){
                resolve("I am back to home")
            }
            else{
                reject("I am not back to home")
            }
        }, 5000);
    })
}

go()
.then(val => {console.log(val); return buy()})
.then(val => {console.log(val); return change()})
.catch(val => {console.log(val); return back()})
.then(val => {console.log(val); })
