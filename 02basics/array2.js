const marvel_heros = ["Thor", "Iron man", "Spider man"]
const dc = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc);
// console.log(marvel_heros)

// let newheros = marvel_heros.concat(dc)
// console.log(newheros);

const allHeros =[...marvel_heros, ...dc]
// console.log(allHeros)
// this method is called as spread method , basically all the elemnts of both the arrays are individual elements now 

const new_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10,[11, 12]]]
const new_another_array = new_array.flat(Infinity)
// console.log(new_another_array);


//checking if it is an array or not and also converting into array 

console.log(Array.isArray("Chhavi")) //checks if given is an array or not 
console.log(Array.from("Chhavi")) // makes array out of this
console.log(Array.from({name: "Chhavi" })) //returns an empty string

//lets make an array out of given data 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// o/p = [100, 200, 300]