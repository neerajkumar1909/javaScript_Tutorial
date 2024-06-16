// chaining of HOF  ======================================================================


// Question 1 :
const persons = [
    { name: "A", age: 34, gender: "M" },
    { name: "B", age: 45, gender: "F" },
    { name: "C", age: 76, gender: "M" },
    { name: "D", age: 23, gender: "F" },
    { name: "E", age: 65, gender: "M" },
    { name: "F", age: 56, gender: "F" },
    { name: "G", age: 44, gender: "M" },
]

// without chaining ==================================================
// Ques : find the ages of all the males

let males = persons.filter(function (obj) {
    return obj.gender === 'M'
})

let malesAge = males.map(function (male) {
    return male.age
})

console.log(males)
console.log(malesAge)


// with Chaining ====================================\

let allMalesAge = persons.filter(function (obj) {
    return obj.gender === 'M'
}).map(function (male) {
    return male.age
})

console.log("with chainng : ", allMalesAge)




// Question : 2 ==============================================

const transactions = [1200, 100, 300, 4000, 700, -7887]

// Question : From the transaction array find the sum of positive element.

const transactionSum = transactions.filter(function (num) {
    return num > 0
}).reduce(function (acc, value) {
    return acc + value
}, 0)

console.log("Total transaction : ", transactionSum)