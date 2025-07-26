
const myHeros = ["Loid forger", "tadano", "light yagami", "anya forger"]

const myArr2 = new Array()
// console.log(myArr[0])

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop();

// myArr.unshift(9) aage add ho jyega
// myArr.shift() aage se hi element will be removed 

// console.log(myArr.includes(0)); 
// console.log(myArr.indexOf(9)); // -1 shows not exist

// const newArr = myArr.join() // bind bhi kr diya h aur string m bhi convert kr diya hai 


// console.log(myArr);
// console.log(newArr)


// slice and splice
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A which is original array", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B sliced array ", myArr)
const myn2 = myArr.splice(1,3);
console.log("C spliced array", myArr)
console.log(myn2)
