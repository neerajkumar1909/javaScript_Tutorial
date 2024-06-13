// The for-of statement creates a loop iterating over iterable objeccts
// including : built-in string, Array, Array-like objects like NodeList and also map and set

// IMPORTANT : with "for of" loop we are values values , but in "for in" loop we were getting keys

var scores = [34, 45, 6, 56, 67, 7];

for (var score of scores) {
    // console.log(score)
}


// how to get indexes(keys) then ?
// by using entries() method

var colors = ["Red", "Yellow", "Green"];

for (var [index, value] of colors.entries()) {
    // console.log(index + ' -> ' + value)   // output : 0 -> Red  1 -> Yellow  2 -> Green
}



// using for of loop with an string to separate each and every character
var str = "String";

for (var c of str) {
    // console.log(c) // output : S t r i n g
}


//  Adding some number to an array with for of loop
// var num = [2, 3, 4, 5];
// for (var sum of num) {
//     sum += 10;
//     console.log(sum)  // output : 12 13 14 15
// }

const ironman = {
    firstname : "ok"
}

console.log(ironman['firstname'])