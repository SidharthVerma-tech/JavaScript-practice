class Car {
    constructor(brand){
        console.log("Object instanxianized")
        this.brand = brand
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand = brand
        console.log(brand)
    }
}
let Toyota = new Car()
let nexus = new Car()

// Constructor is a special method and ustomatically get invoked when object is instancianized

