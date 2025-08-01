//declared as singleton and constructors

// const tinderUser = new Object() // this is a singleton object 
const tinderUser = {} //this is a non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn= false

// 

const regularuser ={
    email: "user@mail.com",
    fullName :{
        userFullName:{
            firstName:"Chhavi",
            lastName:"Kant"
        }
    }
}
// console.log(regularuser.fullName.userFullName.firstName)

const obj1 ={ 1: "a", 2: "b"}
const obj2 ={ 3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
// Object.assign(target, source) {}this is an empty object acting as a target
console.log(obj3)