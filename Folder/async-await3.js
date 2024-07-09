const API_KEY = "https://invalidRandomurl"
async function handlePromise(){
    try{
   const data = await fetch(API_KEY);
   // data is response body
    const jsonValue = await data.json();

    console.log(jsonValue);
    }catch(err){
        console.log(err);
    }
    // data.json() is also a promise

   //fetch=>ResponseObject=>    response.json() which is also promise
}
handlePromise()

