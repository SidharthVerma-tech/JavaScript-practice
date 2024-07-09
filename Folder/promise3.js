// using a promise
const cart = ["paper", "pen", "copy"]
const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
}).then(function(orderId){
    return proceedToPayment(orderId)
}).then(function (paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message)
})
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Succesful")
    }
)}
// creating the createOrder api or promise
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
    if(!validateCart(cart)){
        const err = new Error("Invalid cart");
        reject(err);
    }else{
        let orderId = 12345
        if(orderId){
            resolve(orderId);
            // the data inside resolve is passed as value to the callback function
        }
    }
}
)
return pr
}
function validateCart(){
    return true;
}
