/*
// Question : you have to check for an even number in an array and put them in a separate array

let num = [23, 34, 56, 78, 86, 11, 13, 14, 24];

let isEven = [];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        isEven.push(num[i])
    }
}
console.log(isEven)   // output : [ 34, 56, 78, 86, 14, 24 ]

*/


// Filter Method =================================================================================================

// Filter method returns a new array it will return all those elements that matches the specific condition
// if the conditions is true it will return the elements for that condition and if it is false it will discard the element



// Question : take out all the even numbers from an array
let num = [23, 34, 56, 78, 86, 11, 13, 14, 24];

let squareNum = num.filter(function (n) {
    return n % 2 === 0;
})

console.log(squareNum)  // output : [ 34, 56, 78, 86, 14, 24 ]



// Question : Transactions has some amount, take out all the positive amount from an array

let transactions = [1000, -199, 10022, 450, -234, 4545]

let positiveAmount = transactions.filter(function (a) {
    return a > 0;
})

console.log(positiveAmount)