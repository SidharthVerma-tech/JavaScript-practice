function one(x){
    console.log("function one is called");
    x()
}
one(function two(){
    console.log("function 2 is called");
})
// When a function is passed as an argument or value to another function 
// this is called callback function