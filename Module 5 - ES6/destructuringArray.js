// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


let arr = ["Hi", , "I", "am", "Neeraj"];

// here is how we can access the values at different indexes without destructuring ========================================
// let a = arr[0];
// let b = arr[3];

// console.log(a, b)  // Hi Neeraj


// with destructuring  =========================================================

let [a, b, c, d, e, f] = arr
console.log(a, d, e, f) // Hi am Neeraj undefined
// console.log(a, b, e, f)     // Hi undefined Neeraj undefined