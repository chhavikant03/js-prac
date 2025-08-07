// function fun(){
// console.log("C")
// console.log("C")
// console.log("C")
// console.log("C")
// console.log("C")
// }
// fun()

// function addTwoNos(num1 , num2){ //brackets mai parameters
//    console.log(num1 + num2)
// }
// addTwoNos(3, 4) //isko bolte hai arguments


function calculateCartPrice(...num1){ //rest operator and spread operator are same 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    name : "Chhavi",
    price: 199
}
// function handleObject(anyobject){
//     console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`);
    
// }
// handleObject(user);
// handleObject({
//     name: "sam",
//     price: 366
// })

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
