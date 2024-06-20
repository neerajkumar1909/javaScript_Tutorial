/*
// normal function

function sum(x, y) {
    console.log(x + y)
}
sum(2, 3)
*/


//  Currying function ==========================

let sumCurrying = function (x) {
    return function (y) {
        console.log(x + y)
    }
}

let add = sumCurrying(2); 
add(3)  // this is for nested function 
