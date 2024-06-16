/*
// simple function : write the square of the element of array  (without HOF)
let arr = [1, 2, 3, 4, 5];

let squarredArr = [];
for (i = 0; i < arr.length; i++) {
    squarredArr.push(arr[i] * arr[i])
}

console.log(squarredArr)   // output : [ 1, 4, 9, 16, 25 ]
*/


// With Higher Order Function  ========================================

/* =====================================================================================
// Map methods : Map will loop through every element of your array and will perform specific operations that you have provided

let num = [1, 2, 3, 4, 5];

let squaredNum = num.map(function (n) {
    return n * n
})
console.log(squaredNum)  // output : [ 1, 4, 9, 16, 25 ]

*/

//====================================================================================
// forEach : it does not written return keyword inside the function and does not return output in the form of an array, just output

// Question : convert the following currencies into dollar :

let indianCurrency = [1000, 1500, 454, 654, 1233, 4141, 10000]

let toDollar = 80;

let amountInDollar = indianCurrency.map((a) => {
    console.log((a / toDollar).toFixed(0))   // toFixed is used to round off
})