// problems with var variable

var a = 23;

console.log(a);  // output 23

// =====================================
var b = 100;
var b = 45;         // redeclaration of variable
console.log(b)  // output : 45


// ======================================
if (b === 45) {
    var c = 300;
    console.log(c)  // output : 300
}

// var declared with var keyword are not blocked scope , they are functional scope
console.log(c)  // output : 300


// ========================================================
function test() {
    var d = 100;
    console.log(d)  // output : 100
}
test();

console.log(d)  // here, we get reference error, d is not assigned