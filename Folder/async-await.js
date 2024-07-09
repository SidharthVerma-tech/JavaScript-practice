
const p = new Promise((resolve,reject)=>{
    resolve("Resolved Promise")
})
async function getData(){
    return p
}
// async function always returns a promise
const data = getData()
// data is promise
// if async function is returning a value then it always wrap that value into promise
p.then((res)=>console.log(res));

