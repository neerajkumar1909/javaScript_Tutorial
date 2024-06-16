// find method ===================================================================================

//Find definition :  find returns the first element of an array that satisfy the condition


// Question : find the number which is less than zero?
const number = [100, 424, -45, 121, 454, -4];

const findNum = number.find(function (n) {
    return n < 0;
})
console.log("The number", findNum);  // output : -45


// findIndex =============================================================================
// We can also find the index of that particular number which satisfies the condition


const number1 = [100, 424, -45, 121, 454, -4];

const findNumIndex = number1.findIndex(function (n) {
    return n < 0;
})
console.log("Index of the number ", findNumIndex);  // output : 2