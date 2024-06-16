// Some =======================================================================================

// some methods : some is a method which basically returns a boolean value i.e true or false, but some is only returns true when at least one element of an array satisfies the condition

const number = [112, 11233, 90, -1, 89, 1134, 787];

let value = number.some(function (n) {
    return n < 0
})
console.log(value)  // output : true



// Every =========================================================================================

// every methods will only return true when every element in array should satisfy the condition


const amount = [112, 11233, 90, -1, 89, 1134, 787];

let result = number.every(function (n) {
    return n < 0
})
console.log(result)  // output : false
