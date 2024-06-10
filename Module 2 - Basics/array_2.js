// Inbuilt js array methods

let arr = ["first", 3, 4, 5, 54, 76, 87];

// push
arr.push("Neeraj");
// console.log(arr) // [ "first", 3, 4, 5, 54, 76, 87, 'Neeraj' ]


// pop
var a = arr.pop();
// console.log(a)  // output : Neeraj (here we are getting that perticular value which we have popped from last)

// shift
var b = arr.shift()
// console.log(b)  // output : first (deleting item from index 0)

arr.unshift(122)
console.log(arr)  // output : [ 122,  3,  4, 5, 54, 76, 87 ]