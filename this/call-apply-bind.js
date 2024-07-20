let name1 = {
    firstName : "Sidharth",
    lastName : "Verma",
    // this referes to the object when called inside an object
    
}

function x(hometown, city){
    console.log(this.firstName + " "+ this.lastName + " "+ hometown + " "+ city)
}


// but what if we want to access this x function
// with some other values
let name2 = {
    firstName: "Shivanshu",
    lastName : "Verma"
}
x.call(name1, "mumbai", "pune")
x.apply(name2, ["dehradun", "delhi"])

// apply method is same like 
// bind gives us the copy of function which can be invoked later
let y = x.bind(name1, "mumbai", "pune")
console.log(y)
console.log(y())