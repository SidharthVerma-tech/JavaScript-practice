function x(){
    
    function y(){
        console.log(b)
    }
    y()
}
b=10
x()
// closures are the function bundled together with its lexical environment
// we have reference to the variable outside the scope also
