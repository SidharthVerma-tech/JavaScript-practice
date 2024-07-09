const cart = ["shoes", "pen", "kurta"]
createOrder(function(){
    purchaseOrder(function(){
        updateOrder()
    });
})
// purchaseOrder is dependent on create order
// inversion of control we do not have control of our code
// callback hell for performing other function we again use it as call back to our main function

// to avoid this promises are used

const promise = createOrder(cart)
// promise is an object and the data fetched from api 
// or other function stored in promise object
promise.then(function(orderId){
    return purchaseOrder(orderId)
}).then(function(orderId){
    return updateOrder(orderId)
}).then(function(paymentInfo){
    return paymentInfo
})

// this is called promise chaining