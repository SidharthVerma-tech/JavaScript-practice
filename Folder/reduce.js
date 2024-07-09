const arr = [3,1,2,5,4,6]
const ans = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc=curr
    }
    return acc
}, 0)
console.log(ans)

const users = [
    {firstName : "Sidharth Verma", age : 22},
    {firstName : "SHivanahsu Verma", age : 20},
    {firstName : "Nivedita Verma", age : 24},
    {firstName : "Nivedita Verma", age : 24}
]
const output = users.reduce(function(acc, curr){
       if(acc[curr.age]){
        acc[curr.age]++
       }else{
        acc[curr.age]=1
       }
       return acc
    },
 {})
 console.log(output)

 const new_output = users.filter((x)=>x.age>21).map((x)=>x.firstName)
 console.log(new_output)
 const another_output = users.reduce(function(acc, curr){
    if(curr.age>21){
        acc.push(curr.firstName)
    }
    return acc
 }, [])
 console.log(another_output)