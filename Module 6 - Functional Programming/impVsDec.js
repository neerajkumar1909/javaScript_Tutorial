// Imperative vs Declarative

/*
// Imperative way of writing code ============================================================

// Question :  We have given a number and we have to check the squared of that number is even or not

let a = 5;

let aSquarred = a * a;

let isEven;

if (aSquarred % 2 === 0) {
    isEven = true
} else {
    isEven = false
}

console.log(isEven)
*/


// Declarative way of writing code ============================================================

let checkSquare = x => x * x % 2 === 0 ? true : false;

console.log(checkSquare(5))
