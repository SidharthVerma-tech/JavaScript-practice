let arr = [1,2,3,4,5,6]
function double(x){
    return x*2
}
const ans = arr.map(double)
const ans1 = arr.map(function triple(x){
    return x*3
})
const ans3 = arr.map((x) => x*4)
console.log(ans)
console.log(ans1)
console.log(ans3)