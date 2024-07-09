const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise P1");
    }, 3000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("P2 fail");
    }, 1000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise P3");
    }, 2000)
})
Promise.allSettled([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.error(err));

