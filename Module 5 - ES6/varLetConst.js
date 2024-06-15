/*
// var ================================================
var a = 10;
var a = 40;  // redeclaration
a = 50;  // reassignment
console.log(a);   // output : 50 

//===================

if(true){
    let e = 45;
    console.log(e)  // 45
}
console.log(e)  // 45

function test1() {
    var d = 45;
    console.log(d)  // 45
}
test1()

*/


/*
// let ===================================

let b = 40;
// let b = 45;  // we get an error, we cannot redeclare variable with let keyword
b = 50;         // reassigment
console.log(b)  // output : 50

// block scope
if (true) {
    let e = 45;
    console.log(e)  // 45
}


function test2() {
    let f = 100;
    console.log(f) // 100
}
test2();
*/


/*
// const  =====================================
const c = 45;
// const c = 100;  // we cannot redeclare variable with const keyword
// c=200;      // we cannot reassign variable with const keyword
console.log(c)  // output : error
*/