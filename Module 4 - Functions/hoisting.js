// Hoisting : Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(a)  // undefined
greet()     // output : Hello from neeraj
sum(2, 4)    // output : error

// varible
var a = 'hi'

// with function
function greet() {
    console.log("Hello from neeraj")
}

// with functin as expression
var sum = function (d, e) {
    console.log(d + e)
}



// Hoisting inside a function
function add(){
    console.log(a);  // undefined
    var a = 5
}
add()

