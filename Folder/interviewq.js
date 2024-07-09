function x(){
    for(let i=1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000)
}
}
// beacause let is block scope each time the new value of i
// is passed after each iteartion
function y(){
    for(var i = 1; i<=5; i++){
        function close(x){
            setTimeout(function(){
            console.log(x);
            }, 3000)
        }
        close(i)
    }
}
x()
//y()