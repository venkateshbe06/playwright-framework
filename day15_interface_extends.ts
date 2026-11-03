interface father {
    gold() : void;
    silver() : void;
}

class Child1 implements father{
    gold() : void{
        console.log("1kg gold");        
    }
    silver() : void{
        console.log("1kg silver");        
    }
}

const sample2 = new Child1();
sample2.gold();
sample2.silver();