// function as expression

// this is an expression of variable
// var a = 2 + 6;
// console.log(a)


// NOTE : The function which does not have names we called them anonymous function

/*
let add = function(a,b){
    console.log(a+b)
}
add(2,4)
*/


let add = function (a, b) {
    return a + b
}
var result = add(2, 4);
console.log(result)
