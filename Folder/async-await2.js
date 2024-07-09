const promise  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve value");
    }, 3000)
    
})
async function handlePromise(){
    const val = await promise
    //by using await js engine will wait for promise to be resolved
    console.log(val);
    console.log("Namaste javascript")
}
handlePromise()

// await is a keyword that can pnly be used inside an async function
