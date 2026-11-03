class Home {
    color() : void{
        console.log("White color");        
    }
    rooms() : void{
        console.log("Need 2 bhk");        
    }
    parking() : void{
        console.log("Need both bike and car parking");        
    }
}

const ref = new Home();
ref.color();
ref.rooms();
ref.parking();