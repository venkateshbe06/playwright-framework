class One{
    land() : void{
        console.log("2 acres land");        
    }
}
class Two extends One{
    cash() : void{
        console.log("1 lakh");        
    }
    land() : void{
        console.log("100 grams gold");        
    }
}
const sample = new Two();
sample.cash();
sample.land();
