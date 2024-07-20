class Class1 {
  constructor(name) {
    this.name = name;
    this.species = "homosapience";
    console.log(this.name);
  }
  start() {
    console.log("Start");
  }
  end() {
    console.log("end");
  }
  hello() {
    console.log("hello from the parent");
  }
}
class Class2 extends Class1 {
  constructor() {
    super("Sidharth");
  }
  work() {
    super.hello()
    console.log("Now do work");
  }
  // If we want to access the method of parent class into derived class we use super keyword
}
//let obj1 = new Class1()
let obj = new Class2();
