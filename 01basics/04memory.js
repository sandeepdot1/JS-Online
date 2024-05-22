// Stack (primitive), Heap (reference)

let accountName = "Sandeep"
let newAccountName = accountName

newAccountName = "Skp"

console.log(accountName);
console.log(newAccountName);

let userOne = {
    name: "Sandeep",
    email: "skp@gmail.com"
}

let userTwo = userOne
userTwo.email = "sandeep@gmail.com"

console.log(userOne)
console.log(userTwo)