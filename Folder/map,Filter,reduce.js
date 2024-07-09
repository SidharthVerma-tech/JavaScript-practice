// Map
let nums = [1,2,3,4,5,6]
console.log(nums)
const res = nums.map(function square(x){
    return x*x
})
console.log(res)

// Filter
let ans = nums.filter(function(x){
    return x%2==0
})
console.log(ans)

// Reduce
let sum = nums.reduce(function(accumulator, resultant){
    return accumulator+resultant
})
console.log(sum)

// We can pass function as a  parameter to the other function
function hello(){
    console.log("Hello")
}
setTimeout(hello,3000)