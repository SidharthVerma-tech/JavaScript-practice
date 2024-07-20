"use strict"
// console.log(this)
// // global object which in case of browser is window

// function x(){
//     // the value depends on strict or non strict mode
//     console.log(this)
// }
// window.x()
// x()

// value of this is undefined but this will be susbstitued
// by global object in non-strict mode

// depends on how the function is called
const obj = {
    a : 10,
    x : function(){
        console.log(this.a)
    }
}
// this is reference to HTML element in DOM element