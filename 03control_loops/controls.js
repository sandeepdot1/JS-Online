// controlflow-one
// == : value checking, === : both value and type checking

const isUserLogged = true
const temperature = 41

// if (temperature <= 50) {
//     console.log("Temperature is less than 50")
// }
// else {
//     console.log("Temperature is greater than 50")
// }

const balance = 1000

// if (balance < 500) {
//     console.log("Less than 500")
// }
// else if (balance < 750) {
//     console.log("Less than 750")
// }
// else if (balance < 900) {
//     console.log("Less than 900")
// }
// else {
//     console.log("Less than 1200")
// }


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy cuourses");
}

// falsy values: false, 0, -0, 0n(BigInt), "", null, undefined, NaN 
// (everything except this is truthy values will execute to true)

// truthy values (surprises): "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1)

val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")