//singleton 

//this is object literal

const { jsx } = require("react/jsx-runtime");

//object literals


const mySym = Symbol("key1")

const JsUser = { // defined in key values pair
    name : "Chhavi", // will take name as a string itself "name"
    "full name":"Chhavi Kant",
    age : 20,
    [mySym]: "mykey1",
    location: "dubai",
    email: "chhavi@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday"]
}

//printing object elements 

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser["full name"]); //correct representation tho
console.log(JsUser[mySym])

JsUser.email="chhavi@microsoft.com" // will change the email 
//but using this 
Object.freeze(J)


