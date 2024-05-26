function sayMyName() {
    console.log("Hi")
}

//sayMyName()  // function execution

function add(num1, num2) {
    return num1 + num2
}

const result = add(3, 4)
// console.log(result);

function userLoginMessage(name = "Default") {
    if (!name) {
        return `Invalid user`
    }
    return `${name} logged in`
}

// console.log(userLoginMessage("Sandeep"))

// ... - spread operator / rest operator (based on use)
function calculateCartPrice(num1, num2, ...numList) {
    return numList
}

// console.log(calculateCartPrice(200, 400, 500, 300, 800))

const user = {
    name: "Sandeep",
    price: 20
}

function handleObject(obj) {
    return `name: ${obj.name} and price: ${obj.price}`
}

// console.log(handleObject(user))
// console.log(handleObject({name: "San", price: 30}))


const myArr = [100, 200, 300, 400, 500]

function handleArray(arr) {
    return arr[2]
}

// console.log(handleArray(myArr))
// console.log(handleArray([1,2,3]))
