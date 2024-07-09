// Closure is function binding with lexical environment and its reference
function x(){
    let a = 20
    function y(){
        a++
        console.log(a)
    }
    a=100
    return y
}

let z = x()
console.log(z)
z()
z()
// Even when the a is invoked and completed its execution y still has its refernence of a (lexical environment)